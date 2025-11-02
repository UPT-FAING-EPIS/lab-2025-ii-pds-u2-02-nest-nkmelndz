import { Test, TestingModule } from '@nestjs/testing';
import { DomainService } from './domain.service';
import { Customer } from './customer';
import { Validator } from './validator';
import { DataAccessLayer } from './data-access-layer';
import { EmailService } from './email-service';
import { CustomerRegistration } from './customer-registration';

describe('DomainService', () => {
  let service: DomainService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DomainService],
    }).compile();

    service = module.get<DomainService>(DomainService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

describe('Customer Domain Tests', () => {
  let customer: Customer;
  let validator: Validator;
  let dataAccessLayer: DataAccessLayer;
  let emailService: EmailService;

  beforeEach(() => {
    customer = Customer.Create(
      'John Doe',
      'john.doe@example.com',
      '1234567890',
      '123 Main St',
      'securePassword'
    );
    validator = new Validator();
    dataAccessLayer = new DataAccessLayer();
    emailService = new EmailService();
  });

  it('should validate a customer successfully', () => {
    expect(validator.ValidateCustomer(customer)).toBeTruthy();
  });

  it('should save a customer successfully', () => {
    expect(dataAccessLayer.SaveCustomer(customer)).toBeTruthy();
    expect(dataAccessLayer.Customers.length).toBe(1);
  });

  it('should send registration email successfully', () => {
    expect(emailService.SendRegistrationEmail(customer)).toBeTruthy();
  });
});

describe('CustomerRegistration Tests', () => {
  let customer: Customer;
  let registration: CustomerRegistration;

  beforeEach(() => {
    registration = new CustomerRegistration();
    customer = Customer.Create(
      'Jane Doe',
      'jane.doe@example.com',
      '0987654321',
      '456 Elm St',
      'anotherSecurePassword'
    );
  });

  it('should register a customer successfully', () => {
    expect(registration.RegisterCustomer(customer)).toBeTruthy();
  });
});
