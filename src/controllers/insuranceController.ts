import { Request, Response } from "express";
import { Policy } from "../models/policyModel";
import { Product } from "../models/productModel";
import policiesData from "../data/policies.json";
import productsData from "../data/products.json";

const policies: Policy[] = policiesData as Policy[];
const products: Product[] = productsData as Product[];

export const insuranceController = {
  getPolicyById: (req: Request, res: Response) => {
    const { id } = req.params;

    const policy = policies.find((p) => p.id === id);

    if (policy) {
      const product = products.find((prod) => prod.id === policy.productId);
      res.status(200).json({ ...policy, product });
    } else {
      res.status(404).json({ message: "Policy not found!" });
    }
  },

  getPoliciesByCustomerName: (req: Request, res: Response) => {
    const { customerName } = req.query;

    if (typeof customerName === 'string') {
      const filteredPolicies = policies.filter(
        (p) => p.customerName === customerName
      );

      res.status(200).json(filteredPolicies);
    } else {
      res.status(404).json({ message: "Invalid request parameter!" });
    }
  },

  createPolicy: (req: Request, res: Response) => {
    const { customerName, productId, premium, startDate, endDate } = req.body;

    const newPolicy: Policy = {
      id: `pol_${policies.length + 1}`,
      customerName,
      productId,
      premium,
      startDate: startDate || new Date().toISOString(),
      endDate: endDate || new Date().toISOString(),
      status: "active",
      createdAt: new Date().toISOString(),
    };

    if (!customerName || !productId || !premium) {
      res.status(404).json({ message: "Mandatory input parameters are missing!" });
    }

    policies.push(newPolicy);
    res.status(201).json(newPolicy);
  },

  updatePolicy: (req: Request, res: Response) => {
    const { id } = req.params;
    const { customerName, productId, premium, startDate, endDate, status } =
      req.body;

    const policyIndex = policies.findIndex((p) => p.id === id);
    if (policyIndex !== -1) {
      policies[policyIndex] = {
        ...policies[policyIndex],
        customerName: customerName || policies[policyIndex].customerName,
        productId: productId || policies[policyIndex].productId,
        premium: premium || policies[policyIndex].premium,
        startDate: startDate || policies[policyIndex].startDate,
        endDate: endDate || policies[policyIndex].endDate,
        status: status || policies[policyIndex].status,
      };
      res.status(200).json(policies[policyIndex]);
    } else {
      res.status(404).json({ message: "Policy not found!" });
    }
  },

  deletePolicy: (req: Request, res: Response) => {
    const { id } = req.params;
    const policyIndex = policies.findIndex((p) => p.id === id);

    if (policyIndex !== -1) {
      policies.splice(policyIndex, 1);
      res.status(200).json({ message: "Policy deleted successfully" });
    } else {
      res.status(404).json({ message: "Policy not found!" });
    }
  },
};
