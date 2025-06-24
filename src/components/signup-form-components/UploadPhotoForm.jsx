import { useState, useEffect } from "react";
import { Box, Typography, Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import AWS from 'aws-sdk'
import S3 from 'aws-sdk/clients/s3'


const UploadPhotoForm = ({ formData, setFormData, handleNext, handleChange }) => {
  const [preview, setPreview] = useState(formData.profileImageObj || null);
  const [loading, setLoading] = useState(false);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];

    if (selectedFile) {

      const filePreview = URL.createObjectURL(selectedFile);
      setPreview(filePreview);



      // // // update formData with the selected file
      setFormData((prevData) => ({
        ...prevData,
        profileImageObj: selectedFile,
        profileImage: `https://the-dating-doc-photo-uploads.s3.us-east-2.amazonaws.com/${selectedFile.name}`
      }));

      // call handleChange if additional handling is needed
      if (handleChange) {
        handleChange({ target: { name: "profileImage", value: selectedFile } });
      }
    }
  };
  // console.log(formData);

  const handleUpload = async () => {

    setLoading(true);
    const s3_bucket = 'the-dating-doc-photo-uploads'
    const region = 'us-east-2'

    AWS.config.update({
      accessKeyId: import.meta.env.VITE_AWS_ACCESS_KEY_ID,//USE ENV TO HIDE THESE
      secretAccessKey: import.meta.env.VITE_AWS_SECRET_ACCESS_KEY,//USE ENV TO HIDE THESE

    })

    const s3 = new S3({
      params: { Bucket: s3_bucket },
      region: region,
    })

    const params = {
      Bucket: s3_bucket,
      Key: formData.profileImageObj.name,
      Body: formData.profileImageObj
    }

    try {
      const upload = await s3.putObject(params).promise()
      if (upload.$response.httpResponse.statusCode === 200) {
        setLoading(false);
        handleNext();
      }

    } catch (error) {
      console.log(error);
      setLoading(false);

    }

  };

  useEffect(() => {
    return () => {
      if (preview) {
        URL.revokeObjectURL(preview);
      }
    };
  }, [preview]);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        textAlign: "center",
        padding: "20px",
        color: "white",
      }}
    >
      <Typography variant="h4" sx={{ fontWeight: "bold", mb: 1 }}>
        Add your first photo
      </Typography>
      <Typography variant="body1" sx={{ color: "#B3B3B3", mb: 4 }}>
        Be yourself, you are amazing!
      </Typography>

      <Box
        sx={{
          width: 120,
          height: 120,
          backgroundColor: "#333",
          borderRadius: "12px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          mb: 3,
          cursor: "pointer",
          overflow: "hidden",
        }}
        component="label"
        htmlFor="upload-photo"
      >
        <input
          id="upload-photo"
          type="file"
          style={{ display: "none" }}
          onChange={handleFileChange}
          accept="image/*"
        />
        {preview ? (
          <img
            src={preview}
            alt="Preview"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
        ) : (
          <AddIcon sx={{ fontSize: 40, color: "white" }} />
        )}
      </Box>


      <Button
        onClick={handleUpload}
        variant="contained"
        disabled={loading}
        sx={{
          mt: 4,
          backgroundColor: loading ? "#cccccc" : "#f53b3b",
          color: "white",
          fontWeight: "bold",
          borderRadius: "24px",
          padding: "12px 24px",
          "&:hover": {
            backgroundColor: loading ? "#cccccc" : "#ff4c4c",
          },
          display: "flex",
          alignItems: "center",
        }}
      >
        {loading ? "Uploading..." : "Next"}
        {!loading && <ArrowForwardIosIcon sx={{ ml: 1 }} />}
      </Button>

    </Box>
  );
};

export default UploadPhotoForm;


// import { useState, useEffect } from "react";
// import { Box, Typography, Button } from "@mui/material";
// import AddIcon from "@mui/icons-material/Add";
// import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

// const UploadPhotoForm = ({ formData, setFormData, handleNext, handleChange }) => {
//   const [preview, setPreview] = useState(formData.profileImageObj || null);
//   const [loading, setLoading] = useState(false);

//   const handleFileChange = (e) => {
//     const selectedFile = e.target.files[0];

//     if (selectedFile) {
//       const filePreview = URL.createObjectURL(selectedFile);
//       setPreview(filePreview);

//       setFormData((prevData) => ({
//         ...prevData,
//         profileImageObj: selectedFile,
//         profileImage: selectedFile.name, // you can keep this simple for now
//       }));

//       if (handleChange) {
//         handleChange({ target: { name: "profileImage", value: selectedFile } });
//       }
//     }
//   };

//   const handleUpload = async () => {
//     setLoading(true);

//     // Simulate upload delay for demo purposes
//     setTimeout(() => {
//       setLoading(false);
//       handleNext();
//     }, 1500);
//   };

//   useEffect(() => {
//     return () => {
//       if (preview) {
//         URL.revokeObjectURL(preview);
//       }
//     };
//   }, [preview]);

//   return (
//     <Box
//       sx={{
//         display: "flex",
//         flexDirection: "column",
//         alignItems: "center",
//         justifyContent: "center",
//         minHeight: "100vh",
//         textAlign: "center",
//         padding: "20px",
//         color: "white",
//       }}
//     >
//       <Typography variant="h4" sx={{ fontWeight: "bold", mb: 1 }}>
//         Add your first photo
//       </Typography>
//       <Typography variant="body1" sx={{ color: "#B3B3B3", mb: 4 }}>
//         Be yourself, you are amazing!
//       </Typography>

//       <Box
//         sx={{
//           width: 120,
//           height: 120,
//           backgroundColor: "#333",
//           borderRadius: "12px",
//           display: "flex",
//           alignItems: "center",
//           justifyContent: "center",
//           mb: 3,
//           cursor: "pointer",
//           overflow: "hidden",
//         }}
//         component="label"
//         htmlFor="upload-photo"
//       >
//         <input
//           id="upload-photo"
//           type="file"
//           style={{ display: "none" }}
//           onChange={handleFileChange}
//           accept="image/*"
//         />
//         {preview ? (
//           <img
//             src={preview}
//             alt="Preview"
//             style={{
//               width: "100%",
//               height: "100%",
//               objectFit: "cover",
//             }}
//           />
//         ) : (
//           <AddIcon sx={{ fontSize: 40, color: "white" }} />
//         )}
//       </Box>

//       <Button
//         onClick={handleUpload}
//         variant="contained"
//         disabled={loading}
//         sx={{
//           mt: 4,
//           backgroundColor: loading ? "#cccccc" : "#f53b3b",
//           color: "white",
//           fontWeight: "bold",
//           borderRadius: "24px",
//           padding: "12px 24px",
//           "&:hover": {
//             backgroundColor: loading ? "#cccccc" : "#ff4c4c",
//           },
//           display: "flex",
//           alignItems: "center",
//         }}
//       >
//         {loading ? "Uploading..." : "Next"}
//         {!loading && <ArrowForwardIosIcon sx={{ ml: 1 }} />}
//       </Button>
//     </Box>
//   );
// };

// export default UploadPhotoForm;
