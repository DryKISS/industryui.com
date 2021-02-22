/**
 * Organisms - Email Change - Schema
 */
// Yup
import { object, string } from 'yup';
export var EmailChangeSchema = object().shape({
  email: string().email().required()
});
//# sourceMappingURL=schema.js.map