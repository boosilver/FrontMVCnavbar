import { Util } from '../util/util';
var todate;
import { Injectable } from '@angular/core';
import { ValueTransformer } from '@angular/compiler/src/util';
import * as moment from 'moment'


const construct = function (constructor, argsArray) {


  function F(): void {
    constructor.apply(this, argsArray);
  }
  F.prototype = constructor.prototype;
  return new F();
}

const empty = function (constructor, numArgs: number) {
  todate = Util.todate();
  const nullArgs = new Array(numArgs).fill(null);
  return construct(constructor, nullArgs);
}



// ----------------------------------------- Create PO -------------------------------------------------------------------
export class TransactionCreatePurchaseOrder {
  static empty(): TransactionCreatePurchaseOrder {
    const emptyObj = empty(TransactionCreatePurchaseOrder, 4);
    return emptyObj;
  }

  static sampleSubmitSr(): TransactionCreatePurchaseOrder {
    const sample: TransactionCreatePurchaseOrder = TransactionCreatePurchaseOrder.empty();

    sample.TO = 'companyb';
    sample.EMAIL = 'bossza555@hotmail.com';
    sample.TEL_NUMBER = '0982486331';
    sample.TAX_ID = '1234567891234';
    sample.DELIVERY_ADDRESS = 'Ramkamheang 1111';
    sample.PRODUCT = 'apple';
    sample.NUM_PRODUCT = '100';
    sample.VALUE = '250';
    sample.DELIVERY_DATE = moment().add(0, 'days').format('DD-MM-YYYY')
    sample.PAYMENT = moment().add(0, 'days').format('DD-MM-YYYY')
    sample.DETAIL = 'detail';


    return sample;
  }

  constructor(
    public TO: string,
    public EMAIL: string,
    public TEL_NUMBER: string,
    public TAX_ID: string,
    public DELIVERY_ADDRESS: string,
    public PRODUCT: string,
    public NUM_PRODUCT: string,
    public VALUE: string,
    public DELIVERY_DATE: any,
    public PAYMENT: any,
    // public receipt: FieldsReceipt,
    public DETAIL: string,

  ) { }
}
// ------------------------------------------ END -------------------------------------------------------------------

// ----------------------------------------- CREATE INVOICE ---------------------------------------------------------
export class TransactionCreateInvoice {
  static empty(): TransactionCreateInvoice {
    const emptyObj = empty(TransactionCreateInvoice, 6);
    return emptyObj;
  }

  static sampleSubmitSr(): TransactionCreateInvoice {
    const sample: TransactionCreateInvoice = TransactionCreateInvoice.empty();

    sample.TO = 'companyb';
    sample.EMAIL = 'bossza555@hotmail.com';
    sample.DELIVERY_DATE = moment().add(0, 'days').format('DD-MM-YYYY')
    sample.TEL_NUMBER = '0982486331';
    sample.PO_KEY = '100';
    sample.PRODUCT = 'apple';
    sample.NUM_PRODUCT = '100';
    sample.VALUE = '250';
    sample.DETAIL = 'detail';


    return sample;
  }

  constructor(
    public TO: string,
    public EMAIL: string,
    public TEL_NUMBER: string,
    public DELIVERY_DATE: any,
    public PO_KEY: string,
    public PRODUCT: string,
    public NUM_PRODUCT: string,
    public VALUE: string,
    public DETAIL: string,

  ) { }
}
// ------------------------------------------------- END ---------------------------------------------------------


//  ---------------------------------------------- Check Dashboard list key ------------------------------------------------
export class InquirePOByKeyFields {
  static empty(): InquirePOByKeyFields {
    const emptyObj = empty(InquirePOByKeyFields, 2);
    return emptyObj;
  }

  static sampleSubmitSr(): InquirePOByKeyFields {
    const sample: InquirePOByKeyFields = InquirePOByKeyFields.empty();

    sample.KEY = '100';
    sample.TYPE = 'PO';

    return sample;
  }

  constructor(
    public KEY: string,
    public TYPE: string,

  ) { }
}
//  ---------------------------------------------- END key -----------------------------------------------------------



//  ---------------------------------------------- Inquire data key ------------------------------------------------
export class InquireData {
  static empty(): InquireData {
    const emptyObj = empty(InquireData, 2);
    return emptyObj;
  }

  static sampleSubmitSr(): InquireData {
    const sample: InquireData = InquireData.empty();

    sample.user = 'companyb';
    sample.TYPE = 'PO';

    return sample;
  }

  constructor(
    public user: string,
    public TYPE: string,

  ) { }
}
//  ---------------------------------------------- END key -----------------------------------------------------------


//  ---------------------------------------------- Check Invoice key ------------------------------------------------
export class InquireInvoiceByKeyFields {
  static empty(): InquireInvoiceByKeyFields {
    const emptyObj = empty(InquireInvoiceByKeyFields, 5);
    return emptyObj;
  }

  static sampleSubmitSr(): InquireInvoiceByKeyFields {
    const sample: InquireInvoiceByKeyFields = InquireInvoiceByKeyFields.empty();

    sample.INVOICE_ID = '';
    sample.KEY = '';
    sample.SELLER = '';

    return sample;
  }

  constructor(
    public INVOICE_ID: string,
    public KEY: string,
    public SELLER: string,
  ) { }
}
//  ---------------------------------------------- END key -----------------------------------------------------------

// ----------------------------------------- LOAN by INV ---------------------------------------------------------
export class Loanbyinv {
  static empty(): Loanbyinv {
    const emptyObj = empty(Loanbyinv, 5);
    return emptyObj;
  }

  static sampleSubmitSr(): Loanbyinv {
    const sample: Loanbyinv = Loanbyinv.empty();

    sample.BANK = 'banka';
    sample.DOC_LOAN = 'PO';
    sample.KEY = '1';
    sample.EMAIL = 'bossza555@hotmail.com';
    sample.TEL_NUMBER = '0982486331';
    sample.BUSINESS_TYPE = 'Service_Business';
    sample.INCOME = '10000000';
    sample.GUARANTEE = '123456789123';
    sample.LOAN_AMOUNT = '1000000';
    sample.INSTALLMENT = '5';


    return sample;
  }

  constructor(
    public BANK: string,
    public DOC_LOAN: string,
    public KEY: string,
    public EMAIL: string,
    public TEL_NUMBER: string,
    public BUSINESS_TYPE: string,
    public INCOME: string,
    public GUARANTEE: string,
    public LOAN_AMOUNT: string,
    public INSTALLMENT: string,

  ) { }
}
// ------------------------------------------------- END ---------------------------------------------------------

// ----------------------------------------- Accept Endorse ---------------------------------------------------------
export class Acceptendorse {
  static empty(): Acceptendorse {
    const emptyObj = empty(Acceptendorse, 4);
    return emptyObj;
  }

  static sampleSubmitSr(): Acceptendorse {
    const sample: Acceptendorse = Acceptendorse.empty();

    sample.BANK = 'banka';
    sample.DOC_LOAN = 'PO';
    sample.LOAN_KEY = '1';

    return sample;
  }

  constructor(

    public BANK: string,
    public DOC_LOAN: string,
    public LOAN_KEY: string,

  ) { }
}
// ------------------------------------------------- END ---------------------------------------------------------


// ----------------------------------------- Accept Invoice ---------------------------------------------------------
export class Acceptinvoice {
  static empty(): Acceptinvoice {
    const emptyObj = empty(Acceptinvoice, 1);
    return emptyObj;
  }

  static sampleSubmitSr(): Acceptinvoice {
    const sample: Acceptinvoice = Acceptinvoice.empty();

    sample.KEY = '1';

    return sample;
  }

  constructor(

    public KEY: string,

  ) { }
}
// ------------------------------------------------- END ---------------------------------------------------------

// ----------------------------------------- REJECT ---------------------------------------------------------
export class Reject {
  static empty(): Reject {
    const emptyObj = empty(Reject, 2);
    return emptyObj;
  }

  static sampleSubmitSr(): Reject {
    const sample: Reject = Reject.empty();

    sample.KEY = '';
    sample.TYPE = '';

    return sample;
  }

  constructor(

    public KEY: string,
    public TYPE: string,

  ) { }
}
// ------------------------------------------------- END ---------------------------------------------------------

// ------------------------------------------------- ADD ---------------------------------------------------------

// export class FieldsReceipt {
//   static empty(): FieldsReceipt {
//     return empty(FieldsReceipt, 3);
//   }

//   static sample(): FieldsReceipt {
//     const sample = FieldsReceipt.empty();
//     sample.receiptNo = "784572";
//     sample.treatment = new Array();
//     sample.total = 0;

//     sample.treatment.push(ListTreatment.sample());
//     return sample;
//   }

//   static SubmitSr(): FieldsReceipt {
//     const sample = FieldsReceipt.empty();
//     sample.receiptNo = "";
//     sample.treatment = new Array();
//     sample.total = 0;

//     sample.treatment.push(ListTreatment.sample());
//     return sample;
//   }

//   constructor(
//     public receiptNo: string,
//     public treatment: Array<ListTreatment>,
//     public total: number
//   ) { }
// }
// // // ------------------------------------------------- END ---------------------------------------------------------

// // // ------------------------------------------------- ADD2 ---------------------------------------------------------

// export class ListTreatment {
//   static empty(): ListTreatment {
//     return empty(ListTreatment, 5);
//   }

//   static sample(): ListTreatment {
//     const sample = ListTreatment.empty();

//     sample.listNo = '0';
//     sample.PRODUCT = 'itemA';
//     sample.NUM_PRODUCT = 3;
//     sample.VALUE = 60;

//     return sample;
//   }
//   static sample2(): ListTreatment {
//     const sample = ListTreatment.empty();

//     sample.listNo = '1';
//     sample.PRODUCT = 'LAB G';
//     sample.NUM_PRODUCT = 1;
//     sample.VALUE = 210;

//     return sample;
//   }

//   static SubmitSr(): ListTreatment {
//     const sample = ListTreatment.empty();

//     sample.listNo = '0';
//     sample.PRODUCT = 'item';
//     sample.NUM_PRODUCT ;
//     sample.VALUE ;

//     return sample;
//   }

//   constructor(
//     public listNo: string,
//     public PRODUCT: string,
//     public NUM_PRODUCT: number,
//     public VALUE: number,
//   ) { }
// }
// ------------------------------------------------- END ---------------------------------------------------------


// ----------------------------------------- Dashboard ---------------------------------------------------------
export interface Myinterfacedata {
  DASHBOARD_DATA: DashboardData
  DASHBOARD_LIST: DashboardList[]

}

export interface DashboardData {
  PO: number
  PO_WAIT: number
  PO_COMPLETE: number
  INVOICE: number
  INVOICE_WAIT: number
  INVOICE_COMPLETE: number
  LOAN_INFO_WAIT: number
  ENDORSE_LOAN_WAIT: number
}

export interface DashboardList {
  COMPANY: string
  DATE: string
  TYPE: string
  KEY: string
  LOAN_KEY: string
  STATUS: string
  _id: string
  value: inquirevalue
  SHOW_REJECT: boolean
  SHOW_WAIT: boolean
  SHOW_COMPLETE: boolean
}

export interface inquirevalue{
   TO: string,
   FROM: string,
   TYPE: string,
   ADDRESS: string,
   PO_KEY: string,
   EMAIL: string,
   TEL_NUMBER: string,
   TAX_ID: string,
   DELIVERY_ADDRESS: string,
   PRODUCT: string,
   NUM_PRODUCT: string,
   PRICE: string,
   VAT: string,
   VALUE: string,
   TOTAL_PRICE: string,
   DELIVERY_DATE: Date,
   PAYMENT: Date,
   DETAIL: string,
} { }
// ------------------------------------------------- END ---------------------------------------------------------