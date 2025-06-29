// Define supported authentication modes
export type AuthMode = 'GOOGLE' | 'EMAIL' | 'PHONE';
export type roleType = 'USER' | 'ADMIN' 
export type Credential = {
  mode: AuthMode;
  value: string; // Could be token, email, phone number etc.
};

// Name object
export type NameType = {
  firstName: string;
  middleName?: string;
  lastName: string;
};

// Address object
export type AddressType = {
  location: string;
  pin: string;
  city: string;
  district: string;
  state: string;
  country: string;
};

export interface UserData {
  id: string;
  name: NameType;
  address: AddressType;

  profileImage?: string;

  dob: string; // or Date, depending on how you handle it
  gender: 'MALE' | 'FEMALE' | 'OTHER' | 'PREFER_NOT_TO_SAY';

  email: string;
  phoneNumber: {
    countryCode: string;
    number: string;
  };

  createdAt: string; // or Date
  updatedAt: string; // or Date

  authDetails: Credential[];

  isVerified: boolean;
  isActive: boolean;
  roles: roleType;
}
