"use strict";

// Contact Class
class Contact {
    // Getters and Setters
    get FullName() 
    {
      return this.m_fullName;
    }
    set FullName(value) 
    {
      this.m_fullName = value;
    }
  
    get ContactNumber() 
    {
      return this.m_contactNumber;
    }
    set ContactNumber(value) 
    {
      this.m_contactNumber = value;
    }
  
    get EmailAddress() 
    {
      return this.m_emailAddress;
    }
    set EmailAddress(value) {
      this.m_emailAddress = value;
    }
    
  
      // Constructor
      constructor(fullName, contactNumber, emailAddress) 
      {
        this.m_fullName = fullName;
        this.m_contactNumber = contactNumber;
        this.m_emailAddress = emailAddress;
      }
      // Methods
      toString() {
        return `Full Name      : ${this.m_fullName} \nContact Number: ${this.m_contactNumber} \nEmail Address : ${this.m_emailAddress} `;
      }
  }