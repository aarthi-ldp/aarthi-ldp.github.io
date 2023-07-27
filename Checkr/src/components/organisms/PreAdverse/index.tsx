import React from 'react';
//import theme from '../../../components/themes/index';
import Layout from '../../../components/templates/Layout/index';
import Buttons from '../../../components/atoms/Button/index';
import { useState } from 'react';
import PreviewModal from '../PreviewModal';

 const PreAdverse = () => {
    const [isCheckboxChecked, setIsCheckboxChecked] = useState(false);
    const [isModalOpen, setIsModalOpen]  = useState(false);

    const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setIsCheckboxChecked(event.target.checked);
      };

      const handlePreviewModalOpen = () => {
        setIsModalOpen(true);
      };
    

    return (
    <Layout>
    <div style={{
        maxWidth: '900px',
        // margin: '0 auto',
        border: '1px solid #ccc',
        padding: '20px',
        marginTop: '30px',
        justifyItems: 'left',
        alignItems: 'left',
        boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
        justifyContent: 'left',
        color: 'gray',
    }}>
    
        <b>From:</b> Kyle@Checkr.com
        <hr/>
        <b>To:</b> John.Smith@Checkr.com
        <hr/>
        <b>Subject:</b> Pre-Adverse Action Notice - Checkr-Bpo
        <hr/>
        <br/>
        Dear John Smith,
        <p>You recently authorized a checkr-bpo("the company") to obtain consumer reports and/or investigate consumer<br/>
        reports about you from a consumer reporting agency. The company is considering taking action in whole or in past on <br/>
        information in such report(s) including the following specific items identified in the report prepared by Checkr,Inc.</p> 
        <br/>
        <b>Select the Charges For The Pre Adverse Action</b><br/><br/>
        <div>
        <label>
        <input
          type="checkbox"
          name="Driving while license suspended"
          // checked={isCheckboxChecked} 
          //     onChange={handleCheckboxChange}
          />
          Driving while license suspended
          </label>
          <br/>
          <br/>
          <label>
        <input
          type="checkbox"
          name="Assault Domestic Violence"
          checked={isCheckboxChecked} 
              onChange={handleCheckboxChange}
          />
          Assault Domestic Violence
          </label>
          <br/>
          <br/>
          <label>
        <input
          type="checkbox"
          name="Unable to verify Employment History at Dunder Miffins"
          // checked={isCheckboxChecked} 
          //     onChange={handleCheckboxChange}
          />
          Unable to verify Employment History at Dunder Miffins
          </label>

          </div>
          <div>
            <p>If you wish to dispute the accuracy of the information in the report directly with the customer reporting agency (i.e.,<br/>
            the source of the information contained in the report), you should contact the agency identified above directly.</p>
          <br/>
          Sincerely,<br/>
          Checkr-bpo
          </div>
          <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          borderTop: '1px solid #ccc',
          paddingTop: '10px',
          marginTop: '20px',
        }}>
          <p>Auto send post Adverse action 7 days</p>
          <Buttons variant = "contained" disabled={!isCheckboxChecked} text = "Preview Notice" onClick={handlePreviewModalOpen} sx={{backgroundColor:'blue'}}/>
        </div>


    </div>
    {isModalOpen && (
        <PreviewModal onClose={() => setIsModalOpen(false)} onSubmitPreview={() => setIsModalOpen(false)} />
      )}
    </Layout>
)
}
export default PreAdverse;
