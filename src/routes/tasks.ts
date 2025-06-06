import { Router, Request, Response } from 'express';
import { insuranceController } from '../controllers/insuranceController';
import { authenticate } from '../middleware/validator';

const router = Router();
debugger
// const taskValidationRules = [
//   body('title').notEmpty().withMessage('Title is required'),
//   body('description').notEmpty().withMessage('Description is required'),
//   body('completed').isBoolean().withMessage('Completed must be a boolean'),
// ];


// Public endpoints
router.get('/policies/:id', insuranceController.getPolicyById);
router.get('/policies', insuranceController.getPoliciesByCustomerName);

// Authenticated endpoints
router.post('/policies', authenticate, insuranceController.createPolicy);
router.put('/policies/:id', authenticate, insuranceController.updatePolicy);
router.delete('/policies/:id', authenticate, insuranceController.deletePolicy);

export default router;