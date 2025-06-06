import { insuranceController } from '../insuranceController';
import { Request, Response } from 'express';

jest.mock('../../data/policies.json', () => [
  {
    id: 'pol_001',
    productId: 'prod_motor',
    customerName: 'Alice Smith',
    startDate: '2025-01-01',
    endDate: '2026-01-01',
    premium: 320,
    status: 'active',
    createdAt: '2025-01-01T12:00:00Z',
  },
]);

jest.mock('../../data/products.json', () => [
  {
    id: 'prod_motor',
    name: 'Motor Insurance',
    category: 'motor',
    description: 'Covers damage and liability for cars and motorcycles.',
    basePrice: 300,
    createdAt: '2024-01-01T10:00:00Z',
  },
]);

describe('insuranceController', () => {
  let req: Partial<Request>;
  let res: Partial<Response>;

  beforeEach(() => {
    req = {};
    res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };
  });

  test('getPolicyById should return a policy with product details', () => {
    req.params = { id: 'pol_001' };

    insuranceController.getPolicyById(req as Request, res as Response);

    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith({
      id: 'pol_001',
      productId: 'prod_motor',
      customerName: 'Alice Smith',
      startDate: '2025-01-01',
      endDate: '2026-01-01',
      premium: 320,
      status: 'active',
      createdAt: '2025-01-01T12:00:00Z',
      product: {
        id: 'prod_motor',
        name: 'Motor Insurance',
        category: 'motor',
        description: 'Covers damage and liability for cars and motorcycles.',
        basePrice: 300,
        createdAt: '2024-01-01T10:00:00Z',
      },
    });
  });

  test('getPolicyById should return 404 if no policy id is provided', () => {
    req.params = { id: '' };

    insuranceController.getPolicyById(req as Request, res as Response);

    expect(res.status).toHaveBeenCalledWith(404);
    expect(res.json).toHaveBeenCalledWith({ message: 'Policy not found!' });

  });

  test('getPolicyById should return 404 if policy is not found', () => {
    req.params = { id: 'pol_000' };

    insuranceController.getPolicyById(req as Request, res as Response);

    expect(res.status).toHaveBeenCalledWith(404);
    expect(res.json).toHaveBeenCalledWith({ message: 'Policy not found!' });
  });

  test('getPoliciesByCustomerName should return policies for a specific customer', () => {
    req.query = { customerName: 'Alice Smith' };

    insuranceController.getPoliciesByCustomerName(req as Request, res as Response);

    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith([
      {
        id: 'pol_001',
        productId: 'prod_motor',
        customerName: 'Alice Smith',
        startDate: '2025-01-01',
        endDate: '2026-01-01',
        premium: 320,
        status: 'active',
        createdAt: '2025-01-01T12:00:00Z',
      },
    ]);
  });

  test('getPoliciesByCustomerName should return empty array if no policies match', () => {
    req.query = { customerName: 'Bla bla bla' };

    insuranceController.getPoliciesByCustomerName(req as Request, res as Response);

    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith([]);
  });

  test('createPolicy should return 201 with policy details', () => {
    req.body = {
                  productId: 'prod_motor',
                  customerName: 'Sayali Salunkhe',
                  startDate: '2025-06-06',
                  endDate: '2026-06-05',
                  premium: 100
                };

    insuranceController.createPolicy(req as Request, res as Response);

    expect(res.status).toHaveBeenCalledWith(201);
  });

  test('createPolicy should return 404 if invalid payload provided', () => {
    req.body = {
                  productId: 'prod_motor',
                  customerName: 'Sayali Salunkhe',
                  startDate: '2025-06-06',
                  endDate: '2026-06-05'
                };

    insuranceController.createPolicy(req as Request, res as Response);

    expect(res.status).toHaveBeenCalledWith(404);
    expect(res.json).toHaveBeenCalledWith({ message: 'Mandatory input parameters are missing!' });
  });

});