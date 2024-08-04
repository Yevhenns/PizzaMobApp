import {useAppDispatch, useAppSelector} from '../../../redux/hooks';
import {addInfo, getOrderSum} from '../../../redux/cart/cartSlice';
import {sendOrder} from '../../../redux/cart/cartOperations';
import {Button} from '../../../UI/Button/Button';
import {Input} from '../../../UI/Input/Input';
import {GestureResponderEvent, Text, View} from 'react-native';
import {Formik} from 'formik';
import {cartFormCSS} from './CartForm.styles';
import {CartFormSchema} from './CartFormSchema';

interface CartFormProps {
  openModal: () => void;
  order: Ordered;
}

const CartForm = ({openModal, order}: CartFormProps) => {
  const orderSum = useAppSelector(getOrderSum);
  const dispatch = useAppDispatch();

  const submit = (data: Info) => {
    openModal();
    const customerInfo: Info = {
      name: data.name,
      number: data.number,
      delivery: data.delivery,
      address: data.address,
      comment: data.comment,
    };
    dispatch(addInfo(customerInfo));
    const reqBody: SummaryOrder = {customerInfo, order, orderSum};
    dispatch(sendOrder(reqBody));
  };

  return (
    <View style={cartFormCSS.form}>
      <Formik
        initialValues={{
          name: '',
          number: '',
          delivery: false,
          address: '',
          comment: '',
        }}
        onSubmit={values => submit(values)}
        validationSchema={CartFormSchema}>
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          errors,
          touched,
        }) => (
          <>
            <Input
              label="Ім'я"
              placeholder="Введіть ім'я"
              value={values.name}
              onChangeText={handleChange('name')}
              onBlur={handleBlur('name')}
              error={errors.name}
              touched={touched.name}
            />

            <Input
              label="Номер телефону в форматі: 0991115533"
              placeholder="Введіть номер телефону"
              value={values.number}
              onChangeText={handleChange('number')}
              onBlur={handleBlur('number')}
              error={errors.number}
              touched={touched.number}
              keyboardType="phone-pad"
            />

            <Input
              label="Адреса"
              placeholder="Введіть адресу"
              value={values.address}
              onChangeText={handleChange('address')}
              onBlur={handleBlur('address')}
              error={errors.address}
              touched={touched.address}
            />

            <Input
              label="Коментар"
              placeholder="Введіть коментар"
              value={values.comment}
              onChangeText={handleChange('comment')}
              onBlur={handleBlur('comment')}
              numberOfLines={5}
              textArea
            />

            <Button
              onPress={handleSubmit as (e?: GestureResponderEvent) => void}>
              Підтвердити
            </Button>
          </>
        )}
      </Formik>
    </View>
  );
};

export default CartForm;
