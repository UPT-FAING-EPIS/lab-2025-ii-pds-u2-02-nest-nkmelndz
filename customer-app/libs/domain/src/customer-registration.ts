import { Customer } from "./customer";
import { DataAccessLayer } from "./data-access-layer";
import { EmailService } from "./email-service";
import { Validator } from "./validator";

export class CustomerRegistration {
    public RegisterCustomer(customer: Customer): boolean {
        // Step 1: Validate the Customer
        const validator = new Validator();
        validator.ValidateCustomer(customer);

        // Step 2: Save the Customer Object into the database
        const customerDataAccessLayer = new DataAccessLayer();
        customerDataAccessLayer.SaveCustomer(customer);

        // Step 3: Send the Registration Email to the Customer
        const email = new EmailService();
        email.SendRegistrationEmail(customer);

        return true;
    }    
}
