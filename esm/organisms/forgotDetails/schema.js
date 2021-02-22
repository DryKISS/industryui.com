/**
 * Organisms - Forgot Details - Schema
 */
// Yup
import { object, string } from 'yup';
export var ForgotDetailsSchema = object().shape({
  email: string().required('Please Enter an email').email()
});
//# sourceMappingURL=schema.js.map