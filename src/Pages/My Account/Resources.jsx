import React, { useEffect, useState } from 'react'
import Navbar from '../../Components/Common/Navbar'
import { FaLongArrowAltDown, FaLongArrowAltUp } from 'react-icons/fa';
import BCcertificate from '../../Assets/Resources/New_Certificate_dynamic.pdf'
import NewIDCard from '../../Assets/Resources/new_I D Card.pdf'
import BCAuthorizationLetter from '../../Assets/Resources/BC Authorization Letter_Dynamic.pdf'
import AEPSCashRegister from '../../Assets/Resources/AePS Register_static.pdf'
import AEPSCustomerConsentLetter from '../../Assets/Resources/AePS_Customer_Consent_Letter_static.pdf'
import { generateCertificates } from '../../Utils/GenerateCertificate';

const resourcesData = [
  {
    id: 1,
    title: "BC Certificate",
    description: "BC Certificate is an official document issued by the bank or a financial institution authorizing an individual to act as a representative on its behalf.",
    templateUrl: BCcertificate,
    textData: [
      {text: "CHANDAN THAKUR", x:300, y:320},
      {text: "14 july 2025", x:145, y:110,size:20},
      {text: "1100435876",x:680,y:530,size:20}
    ]
  },
  {
    id: 2,
    title: "BC ID Card",
    description: "The Business Correspondent (BC) ID Card is an official identification issued by the bank or a financial institution to an authorized Business Correspondent.",
    templateUrl: NewIDCard,

  },
  {
    id: 3,
    title: "BC Authorization Letter",
    description: "The authorization letter is an official document issued by the bank or a financial institution formally authorizing an individual to operate as a business corespondent.",
    templateUrl: BCAuthorizationLetter
  },
  {
    id: 4,
    title: "Aeps Cash Register",
    description: "The AEPS Cash Register is a digital ledger or record-keeping system used by Business Correspondents (BCs) to track daily aadhar based cash transactions and balances.",
    templateUrl: AEPSCashRegister
  },
  {
    id: 5,
    title: "Store Branding",
    description: "Store branding refers to visual and thematic elements that represent a business promotional materials displayed at a business corespondent(BC) outlet to represent the affiliated bank or financial institution."
  },
  {
    id: 6,
    title: "Aeps Customer letter",
    description: "The AEPS Customer Letter is a formal communication sent to customers by the Business Correspondent(BC) or the bank, providing information about the AEPS services.",
    templateUrl: AEPSCustomerConsentLetter
  }
];

const Resources = () => {
  const [generatedUrls, setGeneratedUrls] = useState({});

  useEffect(() => {
    const generateAllCertificates = async () => {
      const urls = {};
      for (const resource of resourcesData) {
        if (resource.textData && resource.templateUrl) {
          const url = await generateCertificates({
            templateUrl: resource.templateUrl,
            textData: resource.textData
          });
          urls[resource.id] = url;
        }
      }
      setGeneratedUrls(urls);
    };
    generateAllCertificates();
  }, []);

  return (
    <div className='w-full h-full overflow-auto bg-lightGray text-black font-michroma'>
      <Navbar/>
      <div className='w-full h-full flex flex-col gap-4'>
        <p className='px-5 pt-4'>Home / <span className='font-semibold'>Resources</span></p>
        <div className='w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4'>
          {
            resourcesData.map((resource) => {
              const url = generatedUrls[resource.id] ?? resource.templateUrl;
              const needsGeneration = !!resource.textData && !!resource.templateUrl;

              return (
                <div key={resource.id} className='w-full bg-white rounded-lg p-4 shadow-lg flex flex-col gap-5'>
                  <p className='w-full font-semibold'>{resource.title}</p>
                  <p className='w-full border p-4 text-gray-500 text-sm'>{resource.description}</p>
                  <div className='flex flex-row items-center gap-5 mt-2'>
                    {needsGeneration && !generatedUrls[resource.id] ? (
                      <span className="text-gray-400 w-full text-center">Generating...</span>
                    ) : (
                      <>
                        <a href={url} download className='w-full p-2 text-white bg-black rounded-md flex flex-row items-center justify-center gap-4 hover:text-black hover:bg-custom_pink transition-all duration-150'>Download <FaLongArrowAltUp/></a>
                        <a href={url} rel='noopener noreferrer' target='_blank' className='w-full p-2 text-black bg-custom_pink rounded-md flex flex-row items-center justify-center gap-3 hover:text-custom_pink hover:bg-black transition-all duration-150'><FaLongArrowAltDown/> View</a>
                      </>
                    )}
                  </div>
                </div>
              );
            })
          }
        </div>
      </div>
    </div>
  )
}

export default Resources