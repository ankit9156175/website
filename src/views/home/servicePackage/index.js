import React from 'react'
import CustomView from './customView';
import MobileView from './mobileView';
export default function index() {

    const packageData = [
        {
            title: 'START-UP PACKAGE',
            data: ['Account Registration', 'Upto 50 SKU(Stock Keeping Unit)', 'Product Listing',
                    'Campaign Management Daily Updation', 'Amazon Boost Service', 'GTIN', 'Technical Error Support',
                    'Training', 'Seller Re-instatement', 'Manage Inventory With Inventory Planning.', 'Business Report',
                    'Return Reports', 'Tax Report', 'Account Health Management', 'Promotion & Marketing',
                    'Seller Performance Report (Every 30 Days)', '24*7 Voice Support & Mail (voice support-Twice a week) (E-mail Support- 24*7)'
                ]
        },
        {
            title: 'BUILD-UP PAGE',
            data: [ 'Account Registration', 'Upto 50 SKU(Stock Keeping Unit)', 'Product Listing', 'Campaign Management Daily Updation',
                    'Amazon Boost Service', 'GTIN', 'FBA Registration', 'Promotion & Marketing', 'Account Manager',
                    'FBA Shipment Creation', 'Technical Error Support', 'Training', 'Domestic Shipping', 'Seller Re-instatement',
                    'Manage Inventory With Inventory Planning', 'Business Report', 'Return Reports', 'Tax Report', 'Feedback Review',	
                    'Return & Claim', 'Account Health Management', '24*7 Voice Support & Mail (Voice Support- Thrice A Week) (E-mail Support- 24*7)'
                ]
        },
        {
            title: 'BRAND PACKAGE',
            data: [ 'Account Registration', 'Product Listing', 'Campaign Management', 'Daily Updation', 'Amazon Boost Service',
                    'GTIN', 'FBA Registration', 'Promotion & Marketing', 'Account Manager', 'FBA Shipment Creation', 'Brand Store Registration', 'Brand Store Creation',
                    'A+ Content', 'Technical Error Support', 'Training', 'Domestic Shipping', 'Seller Re-instatement', 'Enhanced Brand Content',
                    'Manage Inventory With Inventory Planning.', 'Business Report', 'Return Reports', 'Tax Report', 'Feedback Review',
                    'Return & Claim', 'Account Health Management', 'Brand Packaging Support', '24*7 Voice Support & Mail', 'Seller Performance Report'
                ]
        },
        {
            title: 'ADD-ON PACKAGE',
            data: [ 'Guaranteed Services', 'Domestic Shipping Services', 'International Shipping Services',
                    'Amazon Global Services', 'Trademark Registration', 'MSME Registration', 'GST Registration', 'GST Return Filing',
                    'Tax Consultancy', 'Income Tax Return Filing', 'Accounting Services', 'Book Keeping'
                ]
        }
    ]
    return (
        <div>
            <div className="d-none d-md-block">
                <CustomView packageData={packageData}/>
            </div>
            <div className="d-md-none">
                <MobileView packageData={packageData}/>
            </div>
        </div>
    )
}
