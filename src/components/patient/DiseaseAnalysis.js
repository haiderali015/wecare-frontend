import React, { useState } from 'react';
import { FormControl, Button, InputLabel, MenuItem, Select, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Dialog } from '@mui/material';

const DiseaseAnalysis = () => {
  const [selectedFeature, setSelectedFeature] = useState('');
  const [tableData, setTableData] = useState([]);
  const [detected,setDetected]=useState("");
  const handleFeatureChange = (event) => {
    setSelectedFeature(event.target.value);
  };

  const handleAddFeature = () => {
    if (selectedFeature !== '') {
      setTableData([...tableData, selectedFeature]);
      setSelectedFeature('');
    }
  };
  const handleDetection=async ()=>
  {
    //call api here 
    const res = await fetch(`http://localhost:5000/disease`, {
      method: "POST",
      headers: {
          "Content-Type": "application/json"
      },
      body: JSON.stringify({
          text:tableData
      })
  });

  
  const data = await res.json();
  setDetected(data.result);
  }

// if(detected)
// {
// return
// <Dialog 
// open={detected}

// >

// </Dialog>
// }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '20px' }}>
          <h1 style={{textAlign:"center", font:"20px", padding:"10px"}}>Disease Analysis</h1>

      <FormControl>
        <InputLabel id="feature-label" style={{ fontFamily: 'Arial', fontSize: '20px', marginBottom: '10px' }}>Select Feature</InputLabel>
        <Select
          labelId="feature-label"
          id="feature-dropdown"
          value={selectedFeature}
          onChange={handleFeatureChange}
          style={{ width: '200px', borderRadius: '5px' }}
        >
          <MenuItem value="itching">itching</MenuItem>
<MenuItem value="skin_rash">skin_rash</MenuItem>
<MenuItem value="nodal_skin_eruptions">nodal_skin_eruptions</MenuItem>
<MenuItem value="continuous_sneezing">continuous_sneezing</MenuItem>
<MenuItem value="shivering">shivering</MenuItem>
<MenuItem value="chills">chills</MenuItem>
<MenuItem value="joint_pain">joint_pain</MenuItem>
<MenuItem value="stomach_pain">stomach_pain</MenuItem>
<MenuItem value="acidity">acidity</MenuItem>
<MenuItem value="ulcers_on_tongue">ulcers_on_tongue</MenuItem>
<MenuItem value="muscle_wasting">muscle_wasting</MenuItem>
<MenuItem value="vomiting">vomiting</MenuItem>
<MenuItem value="burning_micturition">burning_micturition</MenuItem>
<MenuItem value="spotting_urination">spotting_urination</MenuItem>
<MenuItem value="fatigue">fatigue</MenuItem>
<MenuItem value="weight_gain">weight_gain</MenuItem>
<MenuItem value="anxiety">anxiety</MenuItem>
<MenuItem value="cold_hands_and_feets">cold_hands_and_feets</MenuItem>
<MenuItem value="mood_swings">mood_swings</MenuItem>
<MenuItem value="weight_loss">weight_loss</MenuItem>
<MenuItem value="restlessness">restlessness</MenuItem>
<MenuItem value="lethargy">lethargy</MenuItem>
<MenuItem value="patches_in_throat">patches_in_throat</MenuItem>
<MenuItem value="irregular_sugar_level">irregular_sugar_level</MenuItem>
<MenuItem value="cough">cough</MenuItem>
<MenuItem value="high_fever">high_fever</MenuItem>
<MenuItem value="sunken_eyes">sunken_eyes</MenuItem>
<MenuItem value="breathlessness">breathlessness</MenuItem>
<MenuItem value="sweating">sweating</MenuItem>
<MenuItem value="dehydration">dehydration</MenuItem>
<MenuItem value="indigestion">indigestion</MenuItem>
<MenuItem value="headache">headache</MenuItem>
<MenuItem value="yellowish_skin">yellowish_skin</MenuItem>
<MenuItem value="dark_urine">dark_urine</MenuItem>
<MenuItem value="nausea">nausea</MenuItem>
<MenuItem value="loss_of_appetite">loss_of_appetite</MenuItem>
<MenuItem value="pain_behind_the_eyes">pain_behind_the_eyes</MenuItem>
<MenuItem value="back_pain">back_pain</MenuItem>
<MenuItem value="constipation">constipation</MenuItem>
<MenuItem value="abdominal_pain">abdominal_pain</MenuItem>
<MenuItem value="diarrhoea">diarrhoea</MenuItem>
<MenuItem value="mild_fever">mild_fever</MenuItem>
<MenuItem value="yellow_urine">yellow_urine</MenuItem>
<MenuItem value="yellowing_of_eyes">yellowing_of_eyes</MenuItem>
<MenuItem value="acute_liver_failure">acute_liver_failure</MenuItem>
<MenuItem value="fluid_overload">fluid_overload</MenuItem>
<MenuItem value="swelling_of_stomach">swelling_of_stomach</MenuItem>
<MenuItem value="swelled_lymph_nodes">swelled_lymph_nodes</MenuItem>
<MenuItem value="malaise">malaise</MenuItem>
<MenuItem value="blurred_and_distorted_vision">blurred_and_dist</MenuItem>

          {/* Add more MenuItem components for additional features */}
        </Select>
      </FormControl>

      <Button variant="contained" color="success" onClick={handleAddFeature} style={{ marginTop: '10px' }}>Add Feature</Button>

      <TableContainer component={Paper} style={{ marginTop: '20px' }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell style={{ fontSize: '18px', fontWeight: 'bold' }}>Selected Features</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {tableData.map((feature, index) => (
              <TableRow key={index}>
                <TableCell>{feature}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Button onClick={handleDetection} variant={"contained"}>Detect Disease</Button>

      <h1>
        Disease:{detected}
      </h1>
    </div>
   
  );
};

export default DiseaseAnalysis;
