import React from 'react';
import AttachmentIcon from '@mui/icons-material/Attachment';
import Box from '@mui/material/Box';

interface PreviewModalProps {
    onClose: () => void;
    onSubmitPreview: () => void;
}

const PreviewModal: React.FC<PreviewModalProps> = ({ onClose, onSubmitPreview }) => {
  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: 'rgba(0, 0, 0, 0.5)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <div
        style={{
          background: '#fff',
          padding: '20px',
          borderRadius: '4px',
          width: '400px',
        }}
      >
       
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '10px',
            
          }}
        >
          <h3 style={{ margin: 0 }}>Pre-Adverse Action Notice </h3>
          <button
            onClick={onClose}
            style={{
              border: 'none',
              background: 'transparent',
              cursor: 'pointer',
              fontSize: '16px',
              fontWeight: 'bold',
            }}
          >
            X
          </button>
        </div>
        <hr/>

        
        <div>
            <b>From:</b>Kyle@Checkr.com<br/>
            <b>To:</b>John.Smith@Checkr.com<br/>
            <b>Subject:</b>Pre-Adverse Action Notice- Checkr-Bpo
            <Box
            sx={{
              backgroundColor: '#ffcccc', 
              color: 'red',
           
              boxShadow: '0px 0px 8px rgba(0, 0, 0, 0.2)', 
              borderRadius: '4px', 
            }}
          >
                <ul>
                    <li>Please carefully review the list of charges(in bold) and your contact information.</li>
                    <li>Please note that we will send the corresponding post adverse action email automatically <br/>after 7 days.</li>                
                </ul>
            </Box>
            
           

            Dear John Smith,
        <p>You recently authorized a checkr-bpo("the company") to obtain consumer reports and/or investigate consumer<br/>
        reports about you from a consumer reporting agency. The company is considering taking action in whole or in past on <br/>
        information in such report(s) including the following specific items identified in the report prepared by Checkr,Inc.</p> 
        
        <ul>
            <li>Assault Domestic Violence</li>
        </ul>
        
        <p>If you wish to dispute the accuracy of the information in the report directly with the customer reporting agency (i.e.,<br/>
            the source of the information contained in the report), you should contact the agency identified above directly.</p>
          
          Sincerely,<br/>
          Checkr-bpo
        
        <div>
            <b>Attchments</b><br/>
           <AttachmentIcon/> Summary of right under the FCRA<br/>
           <AttachmentIcon/> Copy of background report<br/>

        </div>
    </div>

        {/* Modal Footer */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'flex-end',
            marginTop: '20px',
          }}
        >
           
          <button
            onClick={onSubmitPreview}
            style={{
              padding: '10px 20px',
              background: '#007bff',
              color: '#fff',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
            }}
          >
            Submit Preview
          </button>
        </div>
      </div>
    </div>
  );
};

export default PreviewModal;
