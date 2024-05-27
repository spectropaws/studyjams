"use client"
import React, { useState, useEffect } from 'react'
import TableBody from './TableBody'


function TableIndex() {
// 99 completions   
 const data =  [
  {
    "User Name": "Om Manoj Tajne",
    "User Email": "omtajne25@gmail.com",
    "Google Cloud Skills Boost Profile URL": "https://www.cloudskillsboost.google/public_profiles/d7672bbc-af0f-49c8-8e2b-93c404099f0c",
    "Profile URL Status": "All Good",
    "Prompt Design in Vertex AI Completion": 1,
    "Develop GenAI Apps with Gemini and Streamlit Completion": 1,
    "Gen AI Arcade Game Completion": 1,
    "Sum": 3,
    "All 3 Pathways Completed - Yes or No": "Yes",
    "Campaign Code Redemption Status": "Yes"
  },
  {
    "User Name": "Pratham Akkewar",
    "User Email": "akkewarpratham45@gmail.com",
    "Google Cloud Skills Boost Profile URL": "https://www.cloudskillsboost.google/public_profiles/7fd7ad2a-6c2f-48c4-92e3-43c993a75f51",
    "Profile URL Status": "All Good",
    "Prompt Design in Vertex AI Completion": 1,
    "Develop GenAI Apps with Gemini and Streamlit Completion": 1,
    "Gen AI Arcade Game Completion": 1,
    "Sum": 3,
    "All 3 Pathways Completed - Yes or No": "Yes",
    "Campaign Code Redemption Status": "Yes"
  },
  {
    "User Name": "Badal Wanjari",
    "User Email": "badalwanjari.cse@gmail.com",
    "Google Cloud Skills Boost Profile URL": "https://www.cloudskillsboost.google/public_profiles/e0ab7195-addf-46d0-a29f-4258a254f7d2",
    "Profile URL Status": "All Good",
    "Prompt Design in Vertex AI Completion": 1,
    "Develop GenAI Apps with Gemini and Streamlit Completion": 1,
    "Gen AI Arcade Game Completion": 1,
    "Sum": 3,
    "All 3 Pathways Completed - Yes or No": "Yes",
    "Campaign Code Redemption Status": "Yes"
  },
  {
    "User Name": "Vidhan Shailesh Dahatkar",
    "User Email": "dahatkarv@gmail.com",
    "Google Cloud Skills Boost Profile URL": "https://www.cloudskillsboost.google/public_profiles/52b62e3f-76b5-406d-93d5-e5cbf9184305",
    "Profile URL Status": "All Good",
    "Prompt Design in Vertex AI Completion": 1,
    "Develop GenAI Apps with Gemini and Streamlit Completion": 1,
    "Gen AI Arcade Game Completion": 1,
    "Sum": 3,
    "All 3 Pathways Completed - Yes or No": "Yes",
    "Campaign Code Redemption Status": "Yes"
  },
  {
    "User Name": "Ujjwal Bokde",
    "User Email": "ujjwalbokde370@gmail.com",
    "Google Cloud Skills Boost Profile URL": "https://www.cloudskillsboost.google/public_profiles/131ea657-f8e7-429a-80a6-f962f9891fed",
    "Profile URL Status": "All Good",
    "Prompt Design in Vertex AI Completion": 1,
    "Develop GenAI Apps with Gemini and Streamlit Completion": 1,
    "Gen AI Arcade Game Completion": 1,
    "Sum": 3,
    "All 3 Pathways Completed - Yes or No": "Yes",
    "Campaign Code Redemption Status": "Yes"
  },
  {
    "User Name": "Om Rajesh Ingle",
    "User Email": "omingle71@gmail.com",
    "Google Cloud Skills Boost Profile URL": "https://www.cloudskillsboost.google/public_profiles/7e26ebb5-e9b3-4baf-858d-6179428f95c4",
    "Profile URL Status": "All Good",
    "Prompt Design in Vertex AI Completion": 1,
    "Develop GenAI Apps with Gemini and Streamlit Completion": 1,
    "Gen AI Arcade Game Completion": 1,
    "Sum": 3,
    "All 3 Pathways Completed - Yes or No": "Yes",
    "Campaign Code Redemption Status": "Yes"
  },
  {
    "User Name": "Soham Baba Burhan",
    "User Email": "sohamburhan074@gmail.com",
    "Google Cloud Skills Boost Profile URL": "https://www.cloudskillsboost.google/public_profiles/787bb95b-348a-4c7b-a657-0ddc6b32dad9",
    "Profile URL Status": "All Good",
    "Prompt Design in Vertex AI Completion": 1,
    "Develop GenAI Apps with Gemini and Streamlit Completion": 1,
    "Gen AI Arcade Game Completion": 1,
    "Sum": 3,
    "All 3 Pathways Completed - Yes or No": "Yes",
    "Campaign Code Redemption Status": "Yes"
  },
  {
    "User Name": "Rinesh Patil",
    "User Email": "ringengc@gmail.com",
    "Google Cloud Skills Boost Profile URL": "https://www.cloudskillsboost.google/public_profiles/38b579dc-2026-405b-867a-66b82c94f038",
    "Profile URL Status": "All Good",
    "Prompt Design in Vertex AI Completion": 1,
    "Develop GenAI Apps with Gemini and Streamlit Completion": 1,
    "Gen AI Arcade Game Completion": 1,
    "Sum": 3,
    "All 3 Pathways Completed - Yes or No": "Yes",
    "Campaign Code Redemption Status": "Yes"
  },
  {
    "User Name": "Vinay Ramesh Kamdi",
    "User Email": "v1nayk4mdi@gmail.com",
    "Google Cloud Skills Boost Profile URL": "https://www.cloudskillsboost.google/public_profiles/2adc9acf-06a0-4b63-9a0c-c9039539995b",
    "Profile URL Status": "All Good",
    "Prompt Design in Vertex AI Completion": 1,
    "Develop GenAI Apps with Gemini and Streamlit Completion": 1,
    "Gen AI Arcade Game Completion": 1,
    "Sum": 3,
    "All 3 Pathways Completed - Yes or No": "Yes",
    "Campaign Code Redemption Status": "Yes"
  },
  {
    "User Name": "Anchal chepurwar",
    "User Email": "anchalchepurwar58@gmail.com",
    "Google Cloud Skills Boost Profile URL": "https://www.cloudskillsboost.google/public_profiles/8a3a299e-d079-4025-8ab8-5a9eb0ee385c",
    "Profile URL Status": "All Good",
    "Prompt Design in Vertex AI Completion": 1,
    "Develop GenAI Apps with Gemini and Streamlit Completion": 1,
    "Gen AI Arcade Game Completion": 1,
    "Sum": 3,
    "All 3 Pathways Completed - Yes or No": "Yes",
    "Campaign Code Redemption Status": "Yes"
  },
  {
    "User Name": "Vedika Holani",
    "User Email": "22070645@ycce.in",
    "Google Cloud Skills Boost Profile URL": "https://www.cloudskillsboost.google/public_profiles/ac26109b-90f4-4822-8027-67772bf34b11",
    "Profile URL Status": "All Good",
    "Prompt Design in Vertex AI Completion": 1,
    "Develop GenAI Apps with Gemini and Streamlit Completion": 1,
    "Gen AI Arcade Game Completion": 1,
    "Sum": 3,
    "All 3 Pathways Completed - Yes or No": "Yes",
    "Campaign Code Redemption Status": "Yes"
  },
  {
    "User Name": "Aryan Sukhdewe",
    "User Email": "asukhdewe@gmail.com",
    "Google Cloud Skills Boost Profile URL": "https://www.cloudskillsboost.google/public_profiles/320cafa4-a014-457f-8867-a45560a77075",
    "Profile URL Status": "All Good",
    "Prompt Design in Vertex AI Completion": 1,
    "Develop GenAI Apps with Gemini and Streamlit Completion": 1,
    "Gen AI Arcade Game Completion": 1,
    "Sum": 3,
    "All 3 Pathways Completed - Yes or No": "Yes",
    "Campaign Code Redemption Status": "Yes"
  },
  {
    "User Name": "Ayush Patil",
    "User Email": "hubmind89@gmail.com",
    "Google Cloud Skills Boost Profile URL": "https://www.cloudskillsboost.google/public_profiles/75a955ed-f543-4f42-8660-797d6db7f4df",
    "Profile URL Status": "All Good",
    "Prompt Design in Vertex AI Completion": 1,
    "Develop GenAI Apps with Gemini and Streamlit Completion": 1,
    "Gen AI Arcade Game Completion": 1,
    "Sum": 3,
    "All 3 Pathways Completed - Yes or No": "Yes",
    "Campaign Code Redemption Status": "Yes"
  },
  {
    "User Name": "Rayee Wasankar",
    "User Email": "rayeewasankar@gmail.com",
    "Google Cloud Skills Boost Profile URL": "https://www.cloudskillsboost.google/public_profiles/576e2988-3dff-4071-9022-66285d6128f5",
    "Profile URL Status": "All Good",
    "Prompt Design in Vertex AI Completion": 1,
    "Develop GenAI Apps with Gemini and Streamlit Completion": 1,
    "Gen AI Arcade Game Completion": 1,
    "Sum": 3,
    "All 3 Pathways Completed - Yes or No": "Yes",
    "Campaign Code Redemption Status": "Yes"
  },
  {
    "User Name": "Divya Pimple",
    "User Email": "divyapimple05@gmail.com",
    "Google Cloud Skills Boost Profile URL": "https://www.cloudskillsboost.google/public_profiles/2eb06a4f-c734-497c-a078-6e5160cfc360",
    "Profile URL Status": "All Good",
    "Prompt Design in Vertex AI Completion": 1,
    "Develop GenAI Apps with Gemini and Streamlit Completion": 1,
    "Gen AI Arcade Game Completion": 1,
    "Sum": 3,
    "All 3 Pathways Completed - Yes or No": "Yes",
    "Campaign Code Redemption Status": "Yes"
  },
  {
    "User Name": "Sanket Rambhau Girhepunje",
    "User Email": "sanketgirhepunje13@gmail.com",
    "Google Cloud Skills Boost Profile URL": "https://www.cloudskillsboost.google/public_profiles/b004d0ef-8ff2-4277-82b7-8a2ecb4ab64a",
    "Profile URL Status": "All Good",
    "Prompt Design in Vertex AI Completion": 1,
    "Develop GenAI Apps with Gemini and Streamlit Completion": 1,
    "Gen AI Arcade Game Completion": 1,
    "Sum": 3,
    "All 3 Pathways Completed - Yes or No": "Yes",
    "Campaign Code Redemption Status": "Yes"
  },
  {
    "User Name": "Atul Dipak Thakre",
    "User Email": "atullr3019@gmail.com",
    "Google Cloud Skills Boost Profile URL": "https://www.cloudskillsboost.google/public_profiles/4d94da83-897e-4cea-9423-f10c05619f74",
    "Profile URL Status": "All Good",
    "Prompt Design in Vertex AI Completion": 1,
    "Develop GenAI Apps with Gemini and Streamlit Completion": 1,
    "Gen AI Arcade Game Completion": 1,
    "Sum": 3,
    "All 3 Pathways Completed - Yes or No": "Yes",
    "Campaign Code Redemption Status": "Yes"
  },
  {
    "User Name": "Ashwin Ghanshyam Kondalkar",
    "User Email": "kondalkarashwin27@gmail.com",
    "Google Cloud Skills Boost Profile URL": "https://www.cloudskillsboost.google/public_profiles/c3fc3e42-e0c8-4d32-a361-7d6d0b069592",
    "Profile URL Status": "All Good",
    "Prompt Design in Vertex AI Completion": 1,
    "Develop GenAI Apps with Gemini and Streamlit Completion": 1,
    "Gen AI Arcade Game Completion": 1,
    "Sum": 3,
    "All 3 Pathways Completed - Yes or No": "Yes",
    "Campaign Code Redemption Status": "Yes"
  },
  {
    "User Name": "Mehul Kohad",
    "User Email": "mehulkohad@gmail.com",
    "Google Cloud Skills Boost Profile URL": "https://www.cloudskillsboost.google/public_profiles/c86ed23a-fd4a-4119-ad4a-d5e6bee008f3",
    "Profile URL Status": "All Good",
    "Prompt Design in Vertex AI Completion": 1,
    "Develop GenAI Apps with Gemini and Streamlit Completion": 1,
    "Gen AI Arcade Game Completion": 1,
    "Sum": 3,
    "All 3 Pathways Completed - Yes or No": "Yes",
    "Campaign Code Redemption Status": "Yes"
  },
  {
    "User Name": "Debadrita Chattopadhyay",
    "User Email": "debadritachattopadhyay03@gmail.com",
    "Google Cloud Skills Boost Profile URL": "https://www.cloudskillsboost.google/public_profiles/347f3488-c036-44db-b9db-b5f8823d80ad",
    "Profile URL Status": "All Good",
    "Prompt Design in Vertex AI Completion": 1,
    "Develop GenAI Apps with Gemini and Streamlit Completion": 1,
    "Gen AI Arcade Game Completion": 1,
    "Sum": 3,
    "All 3 Pathways Completed - Yes or No": "Yes",
    "Campaign Code Redemption Status": "Yes"
  },
  {
    "User Name": "Debasrita Chattopadhyay",
    "User Email": "debasritachattopadhyay@gmail.com",
    "Google Cloud Skills Boost Profile URL": "https://www.cloudskillsboost.google/public_profiles/5cc7704c-23da-458b-9dcf-89d10a37d800",
    "Profile URL Status": "All Good",
    "Prompt Design in Vertex AI Completion": 1,
    "Develop GenAI Apps with Gemini and Streamlit Completion": 1,
    "Gen AI Arcade Game Completion": 1,
    "Sum": 3,
    "All 3 Pathways Completed - Yes or No": "Yes",
    "Campaign Code Redemption Status": "Yes"
  },
  {
    "User Name": "Saransh Chavan",
    "User Email": "saranshchavan964@gmail.com",
    "Google Cloud Skills Boost Profile URL": "https://www.cloudskillsboost.google/public_profiles/23d6f802-1bb1-49a3-9844-a29d093165d4",
    "Profile URL Status": "All Good",
    "Prompt Design in Vertex AI Completion": 1,
    "Develop GenAI Apps with Gemini and Streamlit Completion": 1,
    "Gen AI Arcade Game Completion": 1,
    "Sum": 3,
    "All 3 Pathways Completed - Yes or No": "Yes",
    "Campaign Code Redemption Status": "Yes"
  },
  {
    "User Name": "Kaustubh Buran",
    "User Email": "kaustubhburan996@gmail.com",
    "Google Cloud Skills Boost Profile URL": "https://www.cloudskillsboost.google/public_profiles/fa966ef6-750e-4d54-8b14-29afa987437c",
    "Profile URL Status": "All Good",
    "Prompt Design in Vertex AI Completion": 1,
    "Develop GenAI Apps with Gemini and Streamlit Completion": 1,
    "Gen AI Arcade Game Completion": 1,
    "Sum": 3,
    "All 3 Pathways Completed - Yes or No": "Yes",
    "Campaign Code Redemption Status": "Yes"
  },
  {
    "User Name": "Bhupesh Limje",
    "User Email": "bhupesh14159100@gmail.com",
    "Google Cloud Skills Boost Profile URL": "https://www.cloudskillsboost.google/public_profiles/b2794ac4-becf-4222-926a-b34db48ef673",
    "Profile URL Status": "All Good",
    "Prompt Design in Vertex AI Completion": 1,
    "Develop GenAI Apps with Gemini and Streamlit Completion": 1,
    "Gen AI Arcade Game Completion": 1,
    "Sum": 3,
    "All 3 Pathways Completed - Yes or No": "Yes",
    "Campaign Code Redemption Status": "Yes"
  },
  {
    "User Name": "Aman Uchitkar",
    "User Email": "aman.gdsc3@gmail.com",
    "Google Cloud Skills Boost Profile URL": "https://www.cloudskillsboost.google/public_profiles/5858c5d5-a92f-4e84-8d89-75c46f6c74b6",
    "Profile URL Status": "All Good",
    "Prompt Design in Vertex AI Completion": 1,
    "Develop GenAI Apps with Gemini and Streamlit Completion": 1,
    "Gen AI Arcade Game Completion": 1,
    "Sum": 3,
    "All 3 Pathways Completed - Yes or No": "Yes",
    "Campaign Code Redemption Status": "Yes"
  },
  {
    "User Name": "Kunal Nimje",
    "User Email": "kunalnimje245@gmail.com",
    "Google Cloud Skills Boost Profile URL": "https://www.cloudskillsboost.google/public_profiles/88935393-8285-450f-b5be-ac382ec1ab0d",
    "Profile URL Status": "All Good",
    "Prompt Design in Vertex AI Completion": 1,
    "Develop GenAI Apps with Gemini and Streamlit Completion": 1,
    "Gen AI Arcade Game Completion": 1,
    "Sum": 3,
    "All 3 Pathways Completed - Yes or No": "Yes",
    "Campaign Code Redemption Status": "Yes"
  },
  {
    "User Name": "Tanushree Meshram",
    "User Email": "meshramtanushree2@gmail.com",
    "Google Cloud Skills Boost Profile URL": "https://www.cloudskillsboost.google/public_profiles/0b45a369-6aa8-4881-9167-bbf45f0d8719",
    "Profile URL Status": "All Good",
    "Prompt Design in Vertex AI Completion": 1,
    "Develop GenAI Apps with Gemini and Streamlit Completion": 1,
    "Gen AI Arcade Game Completion": 1,
    "Sum": 3,
    "All 3 Pathways Completed - Yes or No": "Yes",
    "Campaign Code Redemption Status": "Yes"
  },
  {
    "User Name": "Om Mane",
    "User Email": "spectropaws777@gmail.com",
    "Google Cloud Skills Boost Profile URL": "https://www.cloudskillsboost.google/public_profiles/29f8a57e-2d47-4e3f-9df1-c1cb04f6c88e",
    "Profile URL Status": "All Good",
    "Prompt Design in Vertex AI Completion": 1,
    "Develop GenAI Apps with Gemini and Streamlit Completion": 1,
    "Gen AI Arcade Game Completion": 1,
    "Sum": 3,
    "All 3 Pathways Completed - Yes or No": "Yes",
    "Campaign Code Redemption Status": "Yes"
  },
  {
    "User Name": "Trisha Padgelwar",
    "User Email": "padgelwartrisha8@gmail.com",
    "Google Cloud Skills Boost Profile URL": "https://www.cloudskillsboost.google/public_profiles/3940a6dc-6a15-46f2-8dc5-2ad83fe2eb54",
    "Profile URL Status": "All Good",
    "Prompt Design in Vertex AI Completion": 1,
    "Develop GenAI Apps with Gemini and Streamlit Completion": 1,
    "Gen AI Arcade Game Completion": 1,
    "Sum": 3,
    "All 3 Pathways Completed - Yes or No": "Yes",
    "Campaign Code Redemption Status": "Yes"
  },
  {
    "User Name": "Atharva Vinod Tasare",
    "User Email": "alex21070847@gmail.com",
    "Google Cloud Skills Boost Profile URL": "https://www.cloudskillsboost.google/public_profiles/5cce3710-4618-4432-a405-87da5b914025",
    "Profile URL Status": "All Good",
    "Prompt Design in Vertex AI Completion": 1,
    "Develop GenAI Apps with Gemini and Streamlit Completion": 1,
    "Gen AI Arcade Game Completion": 1,
    "Sum": 3,
    "All 3 Pathways Completed - Yes or No": "Yes",
    "Campaign Code Redemption Status": "Yes"
  },
  {
    "User Name": "Abhang Kolte",
    "User Email": "22070374@ycce.in",
    "Google Cloud Skills Boost Profile URL": "https://www.cloudskillsboost.google/public_profiles/cfe54d7d-5aef-4476-b960-9cc8db903fb0",
    "Profile URL Status": "All Good",
    "Prompt Design in Vertex AI Completion": 1,
    "Develop GenAI Apps with Gemini and Streamlit Completion": 1,
    "Gen AI Arcade Game Completion": 1,
    "Sum": 3,
    "All 3 Pathways Completed - Yes or No": "Yes",
    "Campaign Code Redemption Status": "Yes"
  },
  {
    "User Name": "Shekhar Dakram Nipane",
    "User Email": "mrdead1418@gmail.com",
    "Google Cloud Skills Boost Profile URL": "https://www.cloudskillsboost.google/public_profiles/4307a612-942f-4b4f-a488-7b342a3167fe",
    "Profile URL Status": "All Good",
    "Prompt Design in Vertex AI Completion": 1,
    "Develop GenAI Apps with Gemini and Streamlit Completion": 1,
    "Gen AI Arcade Game Completion": 1,
    "Sum": 3,
    "All 3 Pathways Completed - Yes or No": "Yes",
    "Campaign Code Redemption Status": "Yes"
  },
  {
    "User Name": "Dnyanesh Ashish Pise",
    "User Email": "23070490@ycce.in",
    "Google Cloud Skills Boost Profile URL": "https://www.cloudskillsboost.google/public_profiles/d8dda8c1-715c-4315-8c6f-91fea99e195b",
    "Profile URL Status": "All Good",
    "Prompt Design in Vertex AI Completion": 1,
    "Develop GenAI Apps with Gemini and Streamlit Completion": 1,
    "Gen AI Arcade Game Completion": 1,
    "Sum": 3,
    "All 3 Pathways Completed - Yes or No": "Yes",
    "Campaign Code Redemption Status": "Yes"
  },
  {
    "User Name": "Anvesh Malkhede",
    "User Email": "abc203284@gmail.com",
    "Google Cloud Skills Boost Profile URL": "https://www.cloudskillsboost.google/public_profiles/92597d90-9c74-492c-896b-e2039546dee8",
    "Profile URL Status": "All Good",
    "Prompt Design in Vertex AI Completion": 1,
    "Develop GenAI Apps with Gemini and Streamlit Completion": 1,
    "Gen AI Arcade Game Completion": 1,
    "Sum": 3,
    "All 3 Pathways Completed - Yes or No": "Yes",
    "Campaign Code Redemption Status": "Yes"
  },
  {
    "User Name": "Saniya Borkar",
    "User Email": "saniyaborkar04@gmail.com",
    "Google Cloud Skills Boost Profile URL": "https://www.cloudskillsboost.google/public_profiles/03eedfcb-81d0-487b-8097-806e3107c46c",
    "Profile URL Status": "All Good",
    "Prompt Design in Vertex AI Completion": 1,
    "Develop GenAI Apps with Gemini and Streamlit Completion": 1,
    "Gen AI Arcade Game Completion": 1,
    "Sum": 3,
    "All 3 Pathways Completed - Yes or No": "Yes",
    "Campaign Code Redemption Status": "Yes"
  },
  {
    "User Name": "Vishakha Ramesh Anmulwar",
    "User Email": "22071147@ycce.in",
    "Google Cloud Skills Boost Profile URL": "https://www.cloudskillsboost.google/public_profiles/c563e421-0ce7-44cd-82f1-6da21c289719",
    "Profile URL Status": "All Good",
    "Prompt Design in Vertex AI Completion": 1,
    "Develop GenAI Apps with Gemini and Streamlit Completion": 1,
    "Gen AI Arcade Game Completion": 1,
    "Sum": 3,
    "All 3 Pathways Completed - Yes or No": "Yes",
    "Campaign Code Redemption Status": "Yes"
  },
  {
    "User Name": "Shreya Kamble",
    "User Email": "shreyakamble210@gmail.com",
    "Google Cloud Skills Boost Profile URL": "https://www.cloudskillsboost.google/public_profiles/99cc365f-5255-459d-9d55-fedf93e0e7b3",
    "Profile URL Status": "All Good",
    "Prompt Design in Vertex AI Completion": 1,
    "Develop GenAI Apps with Gemini and Streamlit Completion": 1,
    "Gen AI Arcade Game Completion": 1,
    "Sum": 3,
    "All 3 Pathways Completed - Yes or No": "Yes",
    "Campaign Code Redemption Status": "Yes"
  },
  {
    "User Name": "Aanchal Joshi",
    "User Email": "joshianchal128@gmail.com",
    "Google Cloud Skills Boost Profile URL": "https://www.cloudskillsboost.google/public_profiles/3100cdc9-a598-4778-83d7-c4b8ea9e1a14",
    "Profile URL Status": "All Good",
    "Prompt Design in Vertex AI Completion": 1,
    "Develop GenAI Apps with Gemini and Streamlit Completion": 1,
    "Gen AI Arcade Game Completion": 1,
    "Sum": 3,
    "All 3 Pathways Completed - Yes or No": "Yes",
    "Campaign Code Redemption Status": "Yes"
  },
  {
    "User Name": "Pradyunya Sandip Chunchwar",
    "User Email": "pradyunyachunchwargdsc@gmail.com",
    "Google Cloud Skills Boost Profile URL": "https://www.cloudskillsboost.google/public_profiles/db4bd3cb-7eca-4421-8f6a-bd3d0e258d6f",
    "Profile URL Status": "All Good",
    "Prompt Design in Vertex AI Completion": 1,
    "Develop GenAI Apps with Gemini and Streamlit Completion": 1,
    "Gen AI Arcade Game Completion": 1,
    "Sum": 3,
    "All 3 Pathways Completed - Yes or No": "Yes",
    "Campaign Code Redemption Status": "Yes"
  },
  {
    "User Name": "Prajwal Vilas Urkude",
    "User Email": "xanderc297@gmail.com",
    "Google Cloud Skills Boost Profile URL": "https://www.cloudskillsboost.google/public_profiles/9851e018-15a6-4888-937e-338f5f07fed9",
    "Profile URL Status": "All Good",
    "Prompt Design in Vertex AI Completion": 1,
    "Develop GenAI Apps with Gemini and Streamlit Completion": 1,
    "Gen AI Arcade Game Completion": 1,
    "Sum": 3,
    "All 3 Pathways Completed - Yes or No": "Yes",
    "Campaign Code Redemption Status": "Yes"
  },
  {
    "User Name": "Karan Jayant Usewar",
    "User Email": "ukaran2k3@gmail.com",
    "Google Cloud Skills Boost Profile URL": "https://www.cloudskillsboost.google/public_profiles/915ee7ce-acee-4e57-a908-cc2be1478bcc",
    "Profile URL Status": "All Good",
    "Prompt Design in Vertex AI Completion": 1,
    "Develop GenAI Apps with Gemini and Streamlit Completion": 1,
    "Gen AI Arcade Game Completion": 1,
    "Sum": 3,
    "All 3 Pathways Completed - Yes or No": "Yes",
    "Campaign Code Redemption Status": "Yes"
  },
  {
    "User Name": "Tushar Kamthe",
    "User Email": "tusharkamthe23@gmail.com",
    "Google Cloud Skills Boost Profile URL": "https://www.cloudskillsboost.google/public_profiles/814c3cec-95f9-4c81-b61e-7b831df77ce3",
    "Profile URL Status": "All Good",
    "Prompt Design in Vertex AI Completion": 1,
    "Develop GenAI Apps with Gemini and Streamlit Completion": 1,
    "Gen AI Arcade Game Completion": 1,
    "Sum": 3,
    "All 3 Pathways Completed - Yes or No": "Yes",
    "Campaign Code Redemption Status": "Yes"
  },
  {
    "User Name": "Aaditee Kedar",
    "User Email": "kedaraaditee@gmail.com",
    "Google Cloud Skills Boost Profile URL": "https://www.cloudskillsboost.google/public_profiles/568723ea-7a2a-43b4-b29c-e5035c810902",
    "Profile URL Status": "All Good",
    "Prompt Design in Vertex AI Completion": 1,
    "Develop GenAI Apps with Gemini and Streamlit Completion": 1,
    "Gen AI Arcade Game Completion": 1,
    "Sum": 3,
    "All 3 Pathways Completed - Yes or No": "Yes",
    "Campaign Code Redemption Status": "Yes"
  },
  {
    "User Name": "Vaishnavi Sanjay Rathod",
    "User Email": "22070217@ycce.in",
    "Google Cloud Skills Boost Profile URL": "https://www.cloudskillsboost.google/public_profiles/7960d91a-2dda-4db6-9aa0-61e65a4231f5",
    "Profile URL Status": "All Good",
    "Prompt Design in Vertex AI Completion": 1,
    "Develop GenAI Apps with Gemini and Streamlit Completion": 1,
    "Gen AI Arcade Game Completion": 1,
    "Sum": 3,
    "All 3 Pathways Completed - Yes or No": "Yes",
    "Campaign Code Redemption Status": "Yes"
  },
  {
    "User Name": "Sanchyee Rajendra Pendam",
    "User Email": "22070233@ycce.in",
    "Google Cloud Skills Boost Profile URL": "https://www.cloudskillsboost.google/public_profiles/1d9ac696-f31c-408b-a175-9a108eebb751",
    "Profile URL Status": "All Good",
    "Prompt Design in Vertex AI Completion": 1,
    "Develop GenAI Apps with Gemini and Streamlit Completion": 1,
    "Gen AI Arcade Game Completion": 1,
    "Sum": 3,
    "All 3 Pathways Completed - Yes or No": "Yes",
    "Campaign Code Redemption Status": "Yes"
  },
  {
    "User Name": "Vaishnavi Mane",
    "User Email": "manev367@gmail.com",
    "Google Cloud Skills Boost Profile URL": "https://www.cloudskillsboost.google/public_profiles/5aa74bad-380e-4adb-ba9f-63e6364fb42e",
    "Profile URL Status": "All Good",
    "Prompt Design in Vertex AI Completion": 1,
    "Develop GenAI Apps with Gemini and Streamlit Completion": 1,
    "Gen AI Arcade Game Completion": 1,
    "Sum": 3,
    "All 3 Pathways Completed - Yes or No": "Yes",
    "Campaign Code Redemption Status": "Yes"
  },
  {
    "User Name": "Ninad Tanksale",
    "User Email": "tankyninad@gmail.com",
    "Google Cloud Skills Boost Profile URL": "https://www.cloudskillsboost.google/public_profiles/a86309f5-58bc-43c7-9980-3553e1d315e2",
    "Profile URL Status": "All Good",
    "Prompt Design in Vertex AI Completion": 1,
    "Develop GenAI Apps with Gemini and Streamlit Completion": 1,
    "Gen AI Arcade Game Completion": 1,
    "Sum": 3,
    "All 3 Pathways Completed - Yes or No": "Yes",
    "Campaign Code Redemption Status": "Yes"
  },
  {
    "User Name": "Harshwardhan Vishwakarma",
    "User Email": "hviz1729@gmail.com",
    "Google Cloud Skills Boost Profile URL": "https://www.cloudskillsboost.google/public_profiles/eb4f3d20-722d-4fb6-b06c-575dca68eb0c",
    "Profile URL Status": "All Good",
    "Prompt Design in Vertex AI Completion": 1,
    "Develop GenAI Apps with Gemini and Streamlit Completion": 1,
    "Gen AI Arcade Game Completion": 1,
    "Sum": 3,
    "All 3 Pathways Completed - Yes or No": "Yes",
    "Campaign Code Redemption Status": "Yes"
  },
  {
    "User Name": "Ayush Moon",
    "User Email": "m240925a1@gmail.com",
    "Google Cloud Skills Boost Profile URL": "https://www.cloudskillsboost.google/public_profiles/8df7c363-046b-417b-ab96-212264e44d15",
    "Profile URL Status": "All Good",
    "Prompt Design in Vertex AI Completion": 1,
    "Develop GenAI Apps with Gemini and Streamlit Completion": 1,
    "Gen AI Arcade Game Completion": 1,
    "Sum": 3,
    "All 3 Pathways Completed - Yes or No": "Yes",
    "Campaign Code Redemption Status": "Yes"
  },
  {
    "User Name": "Sakshi venu vemuri",
    "User Email": "22070478@ycce.in",
    "Google Cloud Skills Boost Profile URL": "https://www.cloudskillsboost.google/public_profiles/8d4b2382-f26b-4821-a904-ad4f6d7d10ff",
    "Profile URL Status": "All Good",
    "Prompt Design in Vertex AI Completion": 1,
    "Develop GenAI Apps with Gemini and Streamlit Completion": 1,
    "Gen AI Arcade Game Completion": 1,
    "Sum": 3,
    "All 3 Pathways Completed - Yes or No": "Yes",
    "Campaign Code Redemption Status": "Yes"
  },
  {
    "User Name": "Shreyash Gajbe",
    "User Email": "shreyash.gajbe184@gmail.com",
    "Google Cloud Skills Boost Profile URL": "https://www.cloudskillsboost.google/public_profiles/61e2b165-7cc5-4e31-9e84-0d671015fdde",
    "Profile URL Status": "All Good",
    "Prompt Design in Vertex AI Completion": 1,
    "Develop GenAI Apps with Gemini and Streamlit Completion": 1,
    "Gen AI Arcade Game Completion": 1,
    "Sum": 3,
    "All 3 Pathways Completed - Yes or No": "Yes",
    "Campaign Code Redemption Status": "Yes"
  },
  {
    "User Name": "Rahul Suresh Gumgaonkar",
    "User Email": "rahulgumgaonkar2@gmail.com",
    "Google Cloud Skills Boost Profile URL": "https://www.cloudskillsboost.google/public_profiles/c02f9d87-26de-48c8-b679-97e30e0af51c",
    "Profile URL Status": "All Good",
    "Prompt Design in Vertex AI Completion": 1,
    "Develop GenAI Apps with Gemini and Streamlit Completion": 1,
    "Gen AI Arcade Game Completion": 1,
    "Sum": 3,
    "All 3 Pathways Completed - Yes or No": "Yes",
    "Campaign Code Redemption Status": "Yes"
  },
  {
    "User Name": "Rutuja Ramdas Rakas",
    "User Email": "rutujarakas@gmail.com",
    "Google Cloud Skills Boost Profile URL": "https://www.cloudskillsboost.google/public_profiles/69a5318b-dc2b-4af3-bc76-d85520f94dce",
    "Profile URL Status": "All Good",
    "Prompt Design in Vertex AI Completion": 1,
    "Develop GenAI Apps with Gemini and Streamlit Completion": 1,
    "Gen AI Arcade Game Completion": 1,
    "Sum": 3,
    "All 3 Pathways Completed - Yes or No": "Yes",
    "Campaign Code Redemption Status": "Yes"
  },
  {
    "User Name": "Arunima Rajesh Paunikar",
    "User Email": "arunimapaunikar818@gmail.com",
    "Google Cloud Skills Boost Profile URL": "https://www.cloudskillsboost.google/public_profiles/6cc18b5b-a012-4581-bbb5-95b17d6c1b1d",
    "Profile URL Status": "All Good",
    "Prompt Design in Vertex AI Completion": 1,
    "Develop GenAI Apps with Gemini and Streamlit Completion": 1,
    "Gen AI Arcade Game Completion": 1,
    "Sum": 3,
    "All 3 Pathways Completed - Yes or No": "Yes",
    "Campaign Code Redemption Status": "Yes"
  },
  {
    "User Name": "Richa Kalpande",
    "User Email": "richa.kalpande23@gmail.com",
    "Google Cloud Skills Boost Profile URL": "https://www.cloudskillsboost.google/public_profiles/4180b382-e141-4bf1-b476-f215aa77da5a",
    "Profile URL Status": "All Good",
    "Prompt Design in Vertex AI Completion": 1,
    "Develop GenAI Apps with Gemini and Streamlit Completion": 1,
    "Gen AI Arcade Game Completion": 1,
    "Sum": 3,
    "All 3 Pathways Completed - Yes or No": "Yes",
    "Campaign Code Redemption Status": "Yes"
  },
  {
    "User Name": "Darshan Bagade",
    "User Email": "darshanbagade123@gmail.com",
    "Google Cloud Skills Boost Profile URL": "https://www.cloudskillsboost.google/public_profiles/9ee99ccf-946a-4669-8d9e-1ddd3a157824",
    "Profile URL Status": "All Good",
    "Prompt Design in Vertex AI Completion": 1,
    "Develop GenAI Apps with Gemini and Streamlit Completion": 1,
    "Gen AI Arcade Game Completion": 1,
    "Sum": 3,
    "All 3 Pathways Completed - Yes or No": "Yes",
    "Campaign Code Redemption Status": "Yes"
  },
  {
    "User Name": "Aditya Rajendra Thakare",
    "User Email": "adityathakare807@gmail.com",
    "Google Cloud Skills Boost Profile URL": "https://www.cloudskillsboost.google/public_profiles/574ed882-8ff5-4a2d-b48e-d27614145791",
    "Profile URL Status": "All Good",
    "Prompt Design in Vertex AI Completion": 1,
    "Develop GenAI Apps with Gemini and Streamlit Completion": 1,
    "Gen AI Arcade Game Completion": 1,
    "Sum": 3,
    "All 3 Pathways Completed - Yes or No": "Yes",
    "Campaign Code Redemption Status": "Yes"
  },
  {
    "User Name": "Praveen pardhi",
    "User Email": "23071226@ycce.in",
    "Google Cloud Skills Boost Profile URL": "https://www.cloudskillsboost.google/public_profiles/019ddb6f-c2e5-4c9c-9c8b-1aa7c99b3565",
    "Profile URL Status": "All Good",
    "Prompt Design in Vertex AI Completion": 1,
    "Develop GenAI Apps with Gemini and Streamlit Completion": 1,
    "Gen AI Arcade Game Completion": 1,
    "Sum": 3,
    "All 3 Pathways Completed - Yes or No": "Yes",
    "Campaign Code Redemption Status": "Yes"
  },
  {
    "User Name": "Ayush Jhawar",
    "User Email": "ayushgenai123@gmail.com",
    "Google Cloud Skills Boost Profile URL": "https://www.cloudskillsboost.google/public_profiles/61cc7299-0b75-469a-baef-0d22b2a1e095",
    "Profile URL Status": "All Good",
    "Prompt Design in Vertex AI Completion": 1,
    "Develop GenAI Apps with Gemini and Streamlit Completion": 1,
    "Gen AI Arcade Game Completion": 1,
    "Sum": 3,
    "All 3 Pathways Completed - Yes or No": "Yes",
    "Campaign Code Redemption Status": "Yes"
  },
  {
    "User Name": "Samiksha Prakash Nimje",
    "User Email": "samikshanimje11@gmail.com",
    "Google Cloud Skills Boost Profile URL": "https://www.cloudskillsboost.google/public_profiles/9fb0d763-0952-42f1-b4ed-467f723365f9",
    "Profile URL Status": "All Good",
    "Prompt Design in Vertex AI Completion": 1,
    "Develop GenAI Apps with Gemini and Streamlit Completion": 1,
    "Gen AI Arcade Game Completion": 1,
    "Sum": 3,
    "All 3 Pathways Completed - Yes or No": "Yes",
    "Campaign Code Redemption Status": "Yes"
  },
  {
    "User Name": "Preksha Pravin Dantulwar",
    "User Email": "dantulwarpreksha@gmail.com",
    "Google Cloud Skills Boost Profile URL": "https://www.cloudskillsboost.google/public_profiles/294089e5-4b50-48c1-9d97-0f4875917f7e",
    "Profile URL Status": "All Good",
    "Prompt Design in Vertex AI Completion": 1,
    "Develop GenAI Apps with Gemini and Streamlit Completion": 1,
    "Gen AI Arcade Game Completion": 1,
    "Sum": 3,
    "All 3 Pathways Completed - Yes or No": "Yes",
    "Campaign Code Redemption Status": "Yes"
  },
  {
    "User Name": "Aarya kothe",
    "User Email": "aaryakothegdsc@gmail.com",
    "Google Cloud Skills Boost Profile URL": "https://www.cloudskillsboost.google/public_profiles/9125fa84-d7ae-4f84-89ea-e6b715d6aa40",
    "Profile URL Status": "All Good",
    "Prompt Design in Vertex AI Completion": 1,
    "Develop GenAI Apps with Gemini and Streamlit Completion": 1,
    "Gen AI Arcade Game Completion": 1,
    "Sum": 3,
    "All 3 Pathways Completed - Yes or No": "Yes",
    "Campaign Code Redemption Status": "Yes"
  },
  {
    "User Name": "Piyush Narendra Piprewar",
    "User Email": "piprewarpiyush08@gmail.com",
    "Google Cloud Skills Boost Profile URL": "https://www.cloudskillsboost.google/public_profiles/62a453df-39b7-4c10-bfba-1f1dd986b39f",
    "Profile URL Status": "All Good",
    "Prompt Design in Vertex AI Completion": 1,
    "Develop GenAI Apps with Gemini and Streamlit Completion": 1,
    "Gen AI Arcade Game Completion": 1,
    "Sum": 3,
    "All 3 Pathways Completed - Yes or No": "Yes",
    "Campaign Code Redemption Status": "Yes"
  },
  {
    "User Name": "Bhuvan Dilip Rakas",
    "User Email": "bhuvanrakas9@gmail.com",
    "Google Cloud Skills Boost Profile URL": "https://www.cloudskillsboost.google/public_profiles/67941008-8e86-4602-9201-2780c873e96f",
    "Profile URL Status": "All Good",
    "Prompt Design in Vertex AI Completion": 1,
    "Develop GenAI Apps with Gemini and Streamlit Completion": 1,
    "Gen AI Arcade Game Completion": 1,
    "Sum": 3,
    "All 3 Pathways Completed - Yes or No": "Yes",
    "Campaign Code Redemption Status": "Yes"
  },
  {
    "User Name": "Chinmay Lokhande",
    "User Email": "chinmaylokhande37@gmail.com",
    "Google Cloud Skills Boost Profile URL": "https://www.cloudskillsboost.google/public_profiles/da82e542-f5fd-4c0b-945e-8461bd8bb4e7",
    "Profile URL Status": "All Good",
    "Prompt Design in Vertex AI Completion": 1,
    "Develop GenAI Apps with Gemini and Streamlit Completion": 1,
    "Gen AI Arcade Game Completion": 1,
    "Sum": 3,
    "All 3 Pathways Completed - Yes or No": "Yes",
    "Campaign Code Redemption Status": "Yes"
  },
  {
    "User Name": "Sargam Arun Kamble",
    "User Email": "sargamkamble4444@gmail.com",
    "Google Cloud Skills Boost Profile URL": "https://www.cloudskillsboost.google/public_profiles/1cdb26d1-5b98-48ed-baf7-38f78a7160bc",
    "Profile URL Status": "All Good",
    "Prompt Design in Vertex AI Completion": 1,
    "Develop GenAI Apps with Gemini and Streamlit Completion": 1,
    "Gen AI Arcade Game Completion": 1,
    "Sum": 3,
    "All 3 Pathways Completed - Yes or No": "Yes",
    "Campaign Code Redemption Status": "Yes"
  },
  {
    "User Name": "Pallavi Vijay Gaurkar",
    "User Email": "pallavigaurkar2003@gmail.com",
    "Google Cloud Skills Boost Profile URL": "https://www.cloudskillsboost.google/public_profiles/1289342b-673a-4c80-8426-a8367a273891",
    "Profile URL Status": "All Good",
    "Prompt Design in Vertex AI Completion": 1,
    "Develop GenAI Apps with Gemini and Streamlit Completion": 1,
    "Gen AI Arcade Game Completion": 1,
    "Sum": 3,
    "All 3 Pathways Completed - Yes or No": "Yes",
    "Campaign Code Redemption Status": "Yes"
  },
  {
    "User Name": "Malay Lokhande",
    "User Email": "malaylokhande007@gmail.com",
    "Google Cloud Skills Boost Profile URL": "https://www.cloudskillsboost.google/public_profiles/cc208e54-63c3-41f6-9862-903d9a9d13f7",
    "Profile URL Status": "All Good",
    "Prompt Design in Vertex AI Completion": 1,
    "Develop GenAI Apps with Gemini and Streamlit Completion": 1,
    "Gen AI Arcade Game Completion": 1,
    "Sum": 3,
    "All 3 Pathways Completed - Yes or No": "Yes",
    "Campaign Code Redemption Status": "Yes"
  },
  {
    "User Name": "Anushka Patni",
    "User Email": "anupatni09@gmail.com",
    "Google Cloud Skills Boost Profile URL": "https://www.cloudskillsboost.google/public_profiles/c934a85a-c0af-4bdb-a0ae-744f7192da16",
    "Profile URL Status": "All Good",
    "Prompt Design in Vertex AI Completion": 1,
    "Develop GenAI Apps with Gemini and Streamlit Completion": 1,
    "Gen AI Arcade Game Completion": 1,
    "Sum": 3,
    "All 3 Pathways Completed - Yes or No": "Yes",
    "Campaign Code Redemption Status": "Yes"
  },
  {
    "User Name": "Sahil Nishad Ninawe",
    "User Email": "sahilninawe44.learn@gmail.com",
    "Google Cloud Skills Boost Profile URL": "https://www.cloudskillsboost.google/public_profiles/3752b3a3-c4d1-46a0-b5e6-0f78d9dbc9f5",
    "Profile URL Status": "All Good",
    "Prompt Design in Vertex AI Completion": 1,
    "Develop GenAI Apps with Gemini and Streamlit Completion": 1,
    "Gen AI Arcade Game Completion": 1,
    "Sum": 3,
    "All 3 Pathways Completed - Yes or No": "Yes",
    "Campaign Code Redemption Status": "Yes"
  },
  {
    "User Name": "Vedant Jagdish Jiwanapurkar",
    "User Email": "vedantjiw2005@gmail.com",
    "Google Cloud Skills Boost Profile URL": "https://www.cloudskillsboost.google/public_profiles/22272da6-49e3-46fc-8ff6-aa1067eec49e",
    "Profile URL Status": "All Good",
    "Prompt Design in Vertex AI Completion": 1,
    "Develop GenAI Apps with Gemini and Streamlit Completion": 1,
    "Gen AI Arcade Game Completion": 1,
    "Sum": 3,
    "All 3 Pathways Completed - Yes or No": "Yes",
    "Campaign Code Redemption Status": "Yes"
  },
  {
    "User Name": "Krishika Madan",
    "User Email": "23070541@ycce.in",
    "Google Cloud Skills Boost Profile URL": "https://www.cloudskillsboost.google/public_profiles/9c6514c4-9b17-40ac-9050-4bab534db324",
    "Profile URL Status": "All Good",
    "Prompt Design in Vertex AI Completion": 1,
    "Develop GenAI Apps with Gemini and Streamlit Completion": 1,
    "Gen AI Arcade Game Completion": 1,
    "Sum": 3,
    "All 3 Pathways Completed - Yes or No": "Yes",
    "Campaign Code Redemption Status": "Yes"
  },
  {
    "User Name": "Shreya Prakash Hedaoo",
    "User Email": "23070963@ycce.in",
    "Google Cloud Skills Boost Profile URL": "https://www.cloudskillsboost.google/public_profiles/ecbe225c-e523-46c8-9b7b-beee11498e46",
    "Profile URL Status": "All Good",
    "Prompt Design in Vertex AI Completion": 1,
    "Develop GenAI Apps with Gemini and Streamlit Completion": 1,
    "Gen AI Arcade Game Completion": 1,
    "Sum": 3,
    "All 3 Pathways Completed - Yes or No": "Yes",
    "Campaign Code Redemption Status": "Yes"
  },
  {
    "User Name": "Om Anil Umredkar",
    "User Email": "23071436@ycce.in",
    "Google Cloud Skills Boost Profile URL": "https://www.cloudskillsboost.google/public_profiles/80592db1-a760-439f-a2ac-b7ccfdcc4154",
    "Profile URL Status": "All Good",
    "Prompt Design in Vertex AI Completion": 1,
    "Develop GenAI Apps with Gemini and Streamlit Completion": 1,
    "Gen AI Arcade Game Completion": 1,
    "Sum": 3,
    "All 3 Pathways Completed - Yes or No": "Yes",
    "Campaign Code Redemption Status": "Yes"
  },
  {
    "User Name": "Bhushan Vijay Tayade",
    "User Email": "23071391@ycce.in",
    "Google Cloud Skills Boost Profile URL": "https://www.cloudskillsboost.google/public_profiles/e98154e5-86b8-42b4-89ff-79ccdb438438",
    "Profile URL Status": "All Good",
    "Prompt Design in Vertex AI Completion": 1,
    "Develop GenAI Apps with Gemini and Streamlit Completion": 1,
    "Gen AI Arcade Game Completion": 1,
    "Sum": 3,
    "All 3 Pathways Completed - Yes or No": "Yes",
    "Campaign Code Redemption Status": "Yes"
  },
  {
    "User Name": "YASH MESHRAM",
    "User Email": "yash.meshram671@gmail.com",
    "Google Cloud Skills Boost Profile URL": "https://www.cloudskillsboost.google/public_profiles/d74e4265-f856-4e2f-a0c5-bd58d238ad66",
    "Profile URL Status": "All Good",
    "Prompt Design in Vertex AI Completion": 1,
    "Develop GenAI Apps with Gemini and Streamlit Completion": 1,
    "Gen AI Arcade Game Completion": 1,
    "Sum": 3,
    "All 3 Pathways Completed - Yes or No": "Yes",
    "Campaign Code Redemption Status": "Yes"
  },
  {
    "User Name": "Harshal Waindeshkar",
    "User Email": "23070720@ycce.in",
    "Google Cloud Skills Boost Profile URL": "https://www.cloudskillsboost.google/public_profiles/a09d5e86-f81e-4d22-8ea9-c712364258fa",
    "Profile URL Status": "All Good",
    "Prompt Design in Vertex AI Completion": 1,
    "Develop GenAI Apps with Gemini and Streamlit Completion": 1,
    "Gen AI Arcade Game Completion": 1,
    "Sum": 3,
    "All 3 Pathways Completed - Yes or No": "Yes",
    "Campaign Code Redemption Status": "Yes"
  },
  {
    "User Name": "Virendra lokhande",
    "User Email": "virendralokhande007@gmail.com",
    "Google Cloud Skills Boost Profile URL": "https://www.cloudskillsboost.google/public_profiles/2b7950dd-62f2-4551-87af-a7d902131070",
    "Profile URL Status": "All Good",
    "Prompt Design in Vertex AI Completion": 1,
    "Develop GenAI Apps with Gemini and Streamlit Completion": 1,
    "Gen AI Arcade Game Completion": 1,
    "Sum": 3,
    "All 3 Pathways Completed - Yes or No": "Yes",
    "Campaign Code Redemption Status": "Yes"
  },
  {
    "User Name": "Yash Marsattiwar",
    "User Email": "yashm27729@gmail.com",
    "Google Cloud Skills Boost Profile URL": "https://www.cloudskillsboost.google/public_profiles/d315f0e8-adaa-4d4a-ad58-1ce548af81d5",
    "Profile URL Status": "All Good",
    "Prompt Design in Vertex AI Completion": 1,
    "Develop GenAI Apps with Gemini and Streamlit Completion": 1,
    "Gen AI Arcade Game Completion": 1,
    "Sum": 3,
    "All 3 Pathways Completed - Yes or No": "Yes",
    "Campaign Code Redemption Status": "Yes"
  },
  {
    "User Name": "Mansvi Manoj Bhoyar",
    "User Email": "mansvibhoyar2005@gmail.com",
    "Google Cloud Skills Boost Profile URL": "https://www.cloudskillsboost.google/public_profiles/6536a47d-da24-4cd5-bd1c-7ff06dddabf8",
    "Profile URL Status": "All Good",
    "Prompt Design in Vertex AI Completion": 1,
    "Develop GenAI Apps with Gemini and Streamlit Completion": 1,
    "Gen AI Arcade Game Completion": 1,
    "Sum": 3,
    "All 3 Pathways Completed - Yes or No": "Yes",
    "Campaign Code Redemption Status": "Yes"
  },
  {
    "User Name": "Sujal jangde",
    "User Email": "sujaljangde3@gmail.com",
    "Google Cloud Skills Boost Profile URL": "https://www.cloudskillsboost.google/public_profiles/673a1a17-04ee-45a7-91e4-e366f7f112a3",
    "Profile URL Status": "All Good",
    "Prompt Design in Vertex AI Completion": 1,
    "Develop GenAI Apps with Gemini and Streamlit Completion": 1,
    "Gen AI Arcade Game Completion": 1,
    "Sum": 3,
    "All 3 Pathways Completed - Yes or No": "Yes",
    "Campaign Code Redemption Status": "Yes"
  },
  {
    "User Name": "Sachit Bramhadas Meshram",
    "User Email": "meshramsachit25@gmail.com",
    "Google Cloud Skills Boost Profile URL": "https://www.cloudskillsboost.google/public_profiles/91e2299a-2c90-481e-af95-26f8658859aa",
    "Profile URL Status": "All Good",
    "Prompt Design in Vertex AI Completion": 1,
    "Develop GenAI Apps with Gemini and Streamlit Completion": 1,
    "Gen AI Arcade Game Completion": 1,
    "Sum": 3,
    "All 3 Pathways Completed - Yes or No": "Yes",
    "Campaign Code Redemption Status": "Yes"
  },
  {
    "User Name": "Samyek Sanjay Dhoke",
    "User Email": "samyekdhoke10@gmail.com",
    "Google Cloud Skills Boost Profile URL": "https://www.cloudskillsboost.google/public_profiles/dda6d2b9-fbf7-4a09-b8ff-a548bafa27d7",
    "Profile URL Status": "All Good",
    "Prompt Design in Vertex AI Completion": 1,
    "Develop GenAI Apps with Gemini and Streamlit Completion": 1,
    "Gen AI Arcade Game Completion": 1,
    "Sum": 3,
    "All 3 Pathways Completed - Yes or No": "Yes",
    "Campaign Code Redemption Status": "Yes"
  },
  {
    "User Name": "Harshita Dalne",
    "User Email": "harshitadalne@gmail.com",
    "Google Cloud Skills Boost Profile URL": "https://www.cloudskillsboost.google/public_profiles/1aa42dbe-c9ce-4004-a486-648c6eb7ebde",
    "Profile URL Status": "All Good",
    "Prompt Design in Vertex AI Completion": 1,
    "Develop GenAI Apps with Gemini and Streamlit Completion": 1,
    "Gen AI Arcade Game Completion": 1,
    "Sum": 3,
    "All 3 Pathways Completed - Yes or No": "Yes",
    "Campaign Code Redemption Status": "Yes"
  },
  {
    "User Name": "Shruti Kawale",
    "User Email": "shrutikawale311@gmail.com",
    "Google Cloud Skills Boost Profile URL": "https://www.cloudskillsboost.google/public_profiles/dffde74a-8978-483c-8b3b-ca148b12bdc9",
    "Profile URL Status": "All Good",
    "Prompt Design in Vertex AI Completion": 1,
    "Develop GenAI Apps with Gemini and Streamlit Completion": 1,
    "Gen AI Arcade Game Completion": 1,
    "Sum": 3,
    "All 3 Pathways Completed - Yes or No": "Yes",
    "Campaign Code Redemption Status": "Yes"
  },
  {
    "User Name": "Divesh Sanjay Kshirsagar",
    "User Email": "diveshkshirsagar42@gmail.com",
    "Google Cloud Skills Boost Profile URL": "https://www.cloudskillsboost.google/public_profiles/a1716d3a-854f-49d6-b988-82c5ea7eb158",
    "Profile URL Status": "All Good",
    "Prompt Design in Vertex AI Completion": 1,
    "Develop GenAI Apps with Gemini and Streamlit Completion": 1,
    "Gen AI Arcade Game Completion": 1,
    "Sum": 3,
    "All 3 Pathways Completed - Yes or No": "Yes",
    "Campaign Code Redemption Status": "Yes"
  },
  {
    "User Name": "Janavi uike",
    "User Email": "uikejanavi@gmail.com",
    "Google Cloud Skills Boost Profile URL": "https://www.cloudskillsboost.google/public_profiles/c20ae67d-7c66-4c86-847c-06ed94da487e",
    "Profile URL Status": "All Good",
    "Prompt Design in Vertex AI Completion": 1,
    "Develop GenAI Apps with Gemini and Streamlit Completion": 1,
    "Gen AI Arcade Game Completion": 1,
    "Sum": 3,
    "All 3 Pathways Completed - Yes or No": "Yes",
    "Campaign Code Redemption Status": "Yes"
  },
  {
    "User Name": "Ram sheshrao kinkar",
    "User Email": "ram.sb.kinkar@gmail.com",
    "Google Cloud Skills Boost Profile URL": "https://www.cloudskillsboost.google/public_profiles/72f236a0-e3af-499f-b921-6eeb3cdcb758",
    "Profile URL Status": "All Good",
    "Prompt Design in Vertex AI Completion": 1,
    "Develop GenAI Apps with Gemini and Streamlit Completion": 1,
    "Gen AI Arcade Game Completion": 1,
    "Sum": 3,
    "All 3 Pathways Completed - Yes or No": "Yes",
    "Campaign Code Redemption Status": "Yes"
  },
  {
    "User Name": "Govind Chudari",
    "User Email": "govindchudari@gmail.com",
    "Google Cloud Skills Boost Profile URL": "https://www.cloudskillsboost.google/public_profiles/ba9d46eb-5661-44f8-8594-b4ef1d1a4fab",
    "Profile URL Status": "All Good",
    "Prompt Design in Vertex AI Completion": 1,
    "Develop GenAI Apps with Gemini and Streamlit Completion": 1,
    "Gen AI Arcade Game Completion": 1,
    "Sum": 3,
    "All 3 Pathways Completed - Yes or No": "Yes",
    "Campaign Code Redemption Status": "Yes"
  },
  {
    "User Name": "Taha Shabbir Cyclewala",
    "User Email": "tahahussain883@gmail.com",
    "Google Cloud Skills Boost Profile URL": "https://www.cloudskillsboost.google/public_profiles/0741cc81-a6bd-4279-8400-26e5f5e4208d",
    "Profile URL Status": "All Good",
    "Prompt Design in Vertex AI Completion": 1,
    "Develop GenAI Apps with Gemini and Streamlit Completion": 1,
    "Gen AI Arcade Game Completion": 1,
    "Sum": 3,
    "All 3 Pathways Completed - Yes or No": "Yes",
    "Campaign Code Redemption Status": "Yes"
  },
  {
    "User Name": "Pratiksha Pradip Pande",
    "User Email": "pratiksha.pandey0601@gmail.com",
    "Google Cloud Skills Boost Profile URL": "https://www.cloudskillsboost.google/public_profiles/d9f733ad-5638-467b-bc9e-ceb82bf8c225",
    "Profile URL Status": "All Good",
    "Prompt Design in Vertex AI Completion": 1,
    "Develop GenAI Apps with Gemini and Streamlit Completion": 1,
    "Gen AI Arcade Game Completion": 1,
    "Sum": 3,
    "All 3 Pathways Completed - Yes or No": "Yes",
    "Campaign Code Redemption Status": "Yes"
  },
  {
    "User Name": "Uday Bharat Tembhurkar",
    "User Email": "udaytembhurkar@gmail.com",
    "Google Cloud Skills Boost Profile URL": "https://www.cloudskillsboost.google/public_profiles/d67f0c99-728e-4565-b37a-8cf640cb3152",
    "Profile URL Status": "All Good",
    "Prompt Design in Vertex AI Completion": 1,
    "Develop GenAI Apps with Gemini and Streamlit Completion": 1,
    "Gen AI Arcade Game Completion": 1,
    "Sum": 3,
    "All 3 Pathways Completed - Yes or No": "Yes",
    "Campaign Code Redemption Status": "Yes"
  },
  {
    "User Name": "Shreya Diliprao Thakare",
    "User Email": "shreyathakare93@gmail.com",
    "Google Cloud Skills Boost Profile URL": "https://www.cloudskillsboost.google/public_profiles/e8ee7abb-16b2-42ec-9adb-7656e705fa76",
    "Profile URL Status": "All Good",
    "Prompt Design in Vertex AI Completion": 1,
    "Develop GenAI Apps with Gemini and Streamlit Completion": 1,
    "Gen AI Arcade Game Completion": 1,
    "Sum": 3,
    "All 3 Pathways Completed - Yes or No": "Yes",
    "Campaign Code Redemption Status": "Yes"
  },
  {
    "User Name": "ROHAN BENDALE",
    "User Email": "berdale112@gmail.com",
    "Google Cloud Skills Boost Profile URL": "https://www.cloudskillsboost.google/public_profiles/9578cb19-d277-4075-bc4d-410bffc5fc77",
    "Profile URL Status": "All Good",
    "Prompt Design in Vertex AI Completion": 1,
    "Develop GenAI Apps with Gemini and Streamlit Completion": 1,
    "Gen AI Arcade Game Completion": 1,
    "Sum": 3,
    "All 3 Pathways Completed - Yes or No": "Yes",
    "Campaign Code Redemption Status": "Yes"
  },
  {
    "User Name": "Paras Shingote",
    "User Email": "classey17@gmail.com",
    "Google Cloud Skills Boost Profile URL": "https://www.cloudskillsboost.google/public_profiles/276c1237-f8ee-48dc-a401-587682ea5044",
    "Profile URL Status": "All Good",
    "Prompt Design in Vertex AI Completion": 1,
    "Develop GenAI Apps with Gemini and Streamlit Completion": 1,
    "Gen AI Arcade Game Completion": 1,
    "Sum": 3,
    "All 3 Pathways Completed - Yes or No": "Yes",
    "Campaign Code Redemption Status": "Yes"
  },
  {
    "User Name": "Anshita Dhole",
    "User Email": "anshu05dhole@gmail.com",
    "Google Cloud Skills Boost Profile URL": "https://www.cloudskillsboost.google/public_profiles/766faf16-c3a6-4b86-8334-a81ead9b9545",
    "Profile URL Status": "All Good",
    "Prompt Design in Vertex AI Completion": 1,
    "Develop GenAI Apps with Gemini and Streamlit Completion": 1,
    "Gen AI Arcade Game Completion": 1,
    "Sum": 3,
    "All 3 Pathways Completed - Yes or No": "Yes",
    "Campaign Code Redemption Status": "Yes"
  },
  {
    "User Name": "Prasanna Dhotarkar",
    "User Email": "prasannadhotarkar@gmail.com",
    "Google Cloud Skills Boost Profile URL": "https://www.cloudskillsboost.google/public_profiles/ca09771e-806f-4e3c-8dea-03d043266f03",
    "Profile URL Status": "All Good",
    "Prompt Design in Vertex AI Completion": 1,
    "Develop GenAI Apps with Gemini and Streamlit Completion": 1,
    "Gen AI Arcade Game Completion": 1,
    "Sum": 3,
    "All 3 Pathways Completed - Yes or No": "Yes",
    "Campaign Code Redemption Status": "Yes"
  },
  {
    "User Name": "Parth Dehare",
    "User Email": "parthdehare97@gmail.com",
    "Google Cloud Skills Boost Profile URL": "https://www.cloudskillsboost.google/public_profiles/8f18773a-506a-46c8-b0d8-a877772685f3",
    "Profile URL Status": "All Good",
    "Prompt Design in Vertex AI Completion": 1,
    "Develop GenAI Apps with Gemini and Streamlit Completion": 1,
    "Gen AI Arcade Game Completion": 1,
    "Sum": 3,
    "All 3 Pathways Completed - Yes or No": "Yes",
    "Campaign Code Redemption Status": "Yes"
  },
  {
    "User Name": "Saee Nimbalkar",
    "User Email": "nimbalkarsaee257@gmail.com",
    "Google Cloud Skills Boost Profile URL": "https://www.cloudskillsboost.google/public_profiles/8ece3832-2f66-4165-86ec-4803d3fd18c1",
    "Profile URL Status": "All Good",
    "Prompt Design in Vertex AI Completion": 1,
    "Develop GenAI Apps with Gemini and Streamlit Completion": 1,
    "Gen AI Arcade Game Completion": 1,
    "Sum": 3,
    "All 3 Pathways Completed - Yes or No": "Yes",
    "Campaign Code Redemption Status": "Yes"
  },
  {
    "User Name": "Swanish Rambhau Mahajan",
    "User Email": "abhisekhias@gmail.com",
    "Google Cloud Skills Boost Profile URL": "https://www.cloudskillsboost.google/public_profiles/a1aac373-02f1-4c68-b408-65eb687681b8",
    "Profile URL Status": "All Good",
    "Prompt Design in Vertex AI Completion": 1,
    "Develop GenAI Apps with Gemini and Streamlit Completion": 0,
    "Gen AI Arcade Game Completion": 1,
    "Sum": 2,
    "All 3 Pathways Completed - Yes or No": "No",
    "Campaign Code Redemption Status": "Yes"
  },
  {
    "User Name": "Diksha Bhagwat",
    "User Email": "22070109@ycce.in",
    "Google Cloud Skills Boost Profile URL": "https://www.cloudskillsboost.google/public_profiles/e64d980a-2c52-4fa1-8f76-216931475795",
    "Profile URL Status": "All Good",
    "Prompt Design in Vertex AI Completion": 1,
    "Develop GenAI Apps with Gemini and Streamlit Completion": 0,
    "Gen AI Arcade Game Completion": 1,
    "Sum": 2,
    "All 3 Pathways Completed - Yes or No": "No",
    "Campaign Code Redemption Status": "No"
  },
  {
    "User Name": "Milind Anil Late",
    "User Email": "studymilind21@gmail.com",
    "Google Cloud Skills Boost Profile URL": "https://www.cloudskillsboost.google/public_profiles/5be772bb-d2e0-4772-a867-8351487b4325",
    "Profile URL Status": "All Good",
    "Prompt Design in Vertex AI Completion": 1,
    "Develop GenAI Apps with Gemini and Streamlit Completion": 0,
    "Gen AI Arcade Game Completion": 1,
    "Sum": 2,
    "All 3 Pathways Completed - Yes or No": "No",
    "Campaign Code Redemption Status": "Yes"
  },
  {
    "User Name": "Ananya Kulkarni",
    "User Email": "ananykulkarni@gmail.com",
    "Google Cloud Skills Boost Profile URL": "https://www.cloudskillsboost.google/public_profiles/3eaa00b6-b1d5-438d-be9b-57528b98c9a2",
    "Profile URL Status": "All Good",
    "Prompt Design in Vertex AI Completion": 0,
    "Develop GenAI Apps with Gemini and Streamlit Completion": 0,
    "Gen AI Arcade Game Completion": 1,
    "Sum": 1,
    "All 3 Pathways Completed - Yes or No": "No",
    "Campaign Code Redemption Status": "Yes"
  },
  {
    "User Name": "Joyeeta Dhar",
    "User Email": "dharjoyeeta7@gmail.com",
    "Google Cloud Skills Boost Profile URL": "https://www.cloudskillsboost.google/public_profiles/23780667-1416-419f-b050-737ba7eef07e",
    "Profile URL Status": "All Good",
    "Prompt Design in Vertex AI Completion": 0,
    "Develop GenAI Apps with Gemini and Streamlit Completion": 0,
    "Gen AI Arcade Game Completion": 1,
    "Sum": 1,
    "All 3 Pathways Completed - Yes or No": "No",
    "Campaign Code Redemption Status": "Yes"
  },
  {
    "User Name": "SUJAL RAJKUMAR GABHANE",
    "User Email": "23071352@ycce.in",
    "Google Cloud Skills Boost Profile URL": "https://www.cloudskillsboost.google/public_profiles/eb53e909-e025-4c46-8f3b-1b642b5da9f5",
    "Profile URL Status": "All Good",
    "Prompt Design in Vertex AI Completion": 1,
    "Develop GenAI Apps with Gemini and Streamlit Completion": 0,
    "Gen AI Arcade Game Completion": 0,
    "Sum": 1,
    "All 3 Pathways Completed - Yes or No": "No",
    "Campaign Code Redemption Status": "Yes"
  },
  {
    "User Name": "Dhiren Dahiwale",
    "User Email": "dhirendahiwaledd@gmail.com",
    "Google Cloud Skills Boost Profile URL": "https://www.cloudskillsboost.google/public_profiles/f9f1e965-6790-4610-b725-e1960ac56a50",
    "Profile URL Status": "All Good",
    "Prompt Design in Vertex AI Completion": 1,
    "Develop GenAI Apps with Gemini and Streamlit Completion": 0,
    "Gen AI Arcade Game Completion": 0,
    "Sum": 1,
    "All 3 Pathways Completed - Yes or No": "No",
    "Campaign Code Redemption Status": "Yes"
  },
  {
    "User Name": "SACHIN NARENDRA BISEN",
    "User Email": "sachinbisen664@gmail.com",
    "Google Cloud Skills Boost Profile URL": "https://www.cloudskillsboost.google/public_profiles/e215ded5-53c2-43b8-a066-6355f2afc605",
    "Profile URL Status": "All Good",
    "Prompt Design in Vertex AI Completion": 1,
    "Develop GenAI Apps with Gemini and Streamlit Completion": 0,
    "Gen AI Arcade Game Completion": 0,
    "Sum": 1,
    "All 3 Pathways Completed - Yes or No": "No",
    "Campaign Code Redemption Status": "Yes"
  },
  {
    "User Name": "Bhagyesh Dedmuthe",
    "User Email": "dedmuthebhagyesh@gmail.com",
    "Google Cloud Skills Boost Profile URL": "https://www.cloudskillsboost.google/public_profiles/07e17817-a540-4717-9b8b-a47d72dea8f0",
    "Profile URL Status": "All Good",
    "Prompt Design in Vertex AI Completion": 0,
    "Develop GenAI Apps with Gemini and Streamlit Completion": 0,
    "Gen AI Arcade Game Completion": 1,
    "Sum": 1,
    "All 3 Pathways Completed - Yes or No": "No",
    "Campaign Code Redemption Status": "Yes"
  },
  {
    "User Name": "Onkar Joshi",
    "User Email": "joshionkar991@gmail.com",
    "Google Cloud Skills Boost Profile URL": "https://www.cloudskillsboost.google/public_profiles/99fe01fa-2801-4704-84fb-314ab68199a1",
    "Profile URL Status": "All Good",
    "Prompt Design in Vertex AI Completion": 0,
    "Develop GenAI Apps with Gemini and Streamlit Completion": 0,
    "Gen AI Arcade Game Completion": 1,
    "Sum": 1,
    "All 3 Pathways Completed - Yes or No": "No",
    "Campaign Code Redemption Status": "Yes"
  },
  {
    "User Name": "Atharva Ajay Patrikar",
    "User Email": "atharvapatrikar2003@gmail.com",
    "Google Cloud Skills Boost Profile URL": "https://www.cloudskillsboost.google/public_profiles/5ebd6df5-c1eb-402e-87f5-ec06e7882106",
    "Profile URL Status": "All Good",
    "Prompt Design in Vertex AI Completion": 0,
    "Develop GenAI Apps with Gemini and Streamlit Completion": 0,
    "Gen AI Arcade Game Completion": 1,
    "Sum": 1,
    "All 3 Pathways Completed - Yes or No": "No",
    "Campaign Code Redemption Status": "Yes"
  },
  {
    "User Name": "Prathmesh Wandhe",
    "User Email": "prathu2955@gmail.com",
    "Google Cloud Skills Boost Profile URL": "https://www.cloudskillsboost.google/public_profiles/57a9e6f2-5aa6-4497-b4d2-71f799c0e8b1",
    "Profile URL Status": "All Good",
    "Prompt Design in Vertex AI Completion": 0,
    "Develop GenAI Apps with Gemini and Streamlit Completion": 0,
    "Gen AI Arcade Game Completion": 1,
    "Sum": 1,
    "All 3 Pathways Completed - Yes or No": "No",
    "Campaign Code Redemption Status": "Yes"
  },
  {
    "User Name": "Vedant Shivarkar",
    "User Email": "shivarkarvedant@gmail.com",
    "Google Cloud Skills Boost Profile URL": "https://www.cloudskillsboost.google/public_profiles/e2bbd788-be3c-4b5e-92d0-883629b14715",
    "Profile URL Status": "All Good",
    "Prompt Design in Vertex AI Completion": 0,
    "Develop GenAI Apps with Gemini and Streamlit Completion": 0,
    "Gen AI Arcade Game Completion": 1,
    "Sum": 1,
    "All 3 Pathways Completed - Yes or No": "No",
    "Campaign Code Redemption Status": "Yes"
  },
  {
    "User Name": "Sumit Kayarkar",
    "User Email": "sumitkayarkar16@gmail.com",
    "Google Cloud Skills Boost Profile URL": "https://www.cloudskillsboost.google/public_profiles/a9afbd91-1a69-4bb4-b60d-6b87c00634c5",
    "Profile URL Status": "All Good",
    "Prompt Design in Vertex AI Completion": 0,
    "Develop GenAI Apps with Gemini and Streamlit Completion": 0,
    "Gen AI Arcade Game Completion": 1,
    "Sum": 1,
    "All 3 Pathways Completed - Yes or No": "No",
    "Campaign Code Redemption Status": "Yes"
  },
  {
    "User Name": "Nidhi Sakhare",
    "User Email": "sakharenidhi95@gmail.com",
    "Google Cloud Skills Boost Profile URL": "https://www.cloudskillsboost.google/public_profiles/e80dab9a-1a1f-4c50-94b7-28cb0630252b",
    "Profile URL Status": "All Good",
    "Prompt Design in Vertex AI Completion": 0,
    "Develop GenAI Apps with Gemini and Streamlit Completion": 0,
    "Gen AI Arcade Game Completion": 0,
    "Sum": 0,
    "All 3 Pathways Completed - Yes or No": "No",
    "Campaign Code Redemption Status": "No"
  },
  {
    "User Name": "Yash Patle",
    "User Email": "yashpatle.job@gmail.com",
    "Google Cloud Skills Boost Profile URL": "https://www.cloudskillsboost.google/public_profiles/5ac640c6-7bd0-4f2c-8001-fe8121310b8a",
    "Profile URL Status": "All Good",
    "Prompt Design in Vertex AI Completion": 0,
    "Develop GenAI Apps with Gemini and Streamlit Completion": 0,
    "Gen AI Arcade Game Completion": 0,
    "Sum": 0,
    "All 3 Pathways Completed - Yes or No": "No",
    "Campaign Code Redemption Status": "No"
  },
  {
    "User Name": "Aditya Alat",
    "User Email": "adityaalat007@gmail.com",
    "Google Cloud Skills Boost Profile URL": "https://www.cloudskillsboost.google/public_profiles/53904eda-42af-4f4b-b203-30e8459e76ed",
    "Profile URL Status": "All Good",
    "Prompt Design in Vertex AI Completion": 0,
    "Develop GenAI Apps with Gemini and Streamlit Completion": 0,
    "Gen AI Arcade Game Completion": 0,
    "Sum": 0,
    "All 3 Pathways Completed - Yes or No": "No",
    "Campaign Code Redemption Status": "No"
  },
  {
    "User Name": "Khushi pandey",
    "User Email": "21070529@ycce.in",
    "Google Cloud Skills Boost Profile URL": "https://www.cloudskillsboost.google/public_profiles/dcebf4fb-38c8-446a-9af2-da1cb572884a",
    "Profile URL Status": "All Good",
    "Prompt Design in Vertex AI Completion": 0,
    "Develop GenAI Apps with Gemini and Streamlit Completion": 0,
    "Gen AI Arcade Game Completion": 0,
    "Sum": 0,
    "All 3 Pathways Completed - Yes or No": "No",
    "Campaign Code Redemption Status": "No"
  },
  {
    "User Name": "Divyank Ghinmine",
    "User Email": "divyankghinmine@gmail.com",
    "Google Cloud Skills Boost Profile URL": "https://www.cloudskillsboost.google/public_profiles/a238b54e-db28-4e7f-be45-1b8b0f668139",
    "Profile URL Status": "All Good",
    "Prompt Design in Vertex AI Completion": 0,
    "Develop GenAI Apps with Gemini and Streamlit Completion": 0,
    "Gen AI Arcade Game Completion": 0,
    "Sum": 0,
    "All 3 Pathways Completed - Yes or No": "No",
    "Campaign Code Redemption Status": "Yes"
  },
  {
    "User Name": "Samyak gaure",
    "User Email": "samyakgaure051@gmail.com",
    "Google Cloud Skills Boost Profile URL": "https://www.cloudskillsboost.google/public_profiles/9401de0a-8615-4675-90d5-1f86019e9150",
    "Profile URL Status": "All Good",
    "Prompt Design in Vertex AI Completion": 0,
    "Develop GenAI Apps with Gemini and Streamlit Completion": 0,
    "Gen AI Arcade Game Completion": 0,
    "Sum": 0,
    "All 3 Pathways Completed - Yes or No": "No",
    "Campaign Code Redemption Status": "Yes"
  },
  {
    "User Name": "Gunjan Vivek Bagaitkar",
    "User Email": "bagaitkargunjan@gmail.com",
    "Google Cloud Skills Boost Profile URL": "https://www.cloudskillsboost.google/public_profiles/a20da34f-ce6e-441a-b152-e338ebda8b9c",
    "Profile URL Status": "All Good",
    "Prompt Design in Vertex AI Completion": 0,
    "Develop GenAI Apps with Gemini and Streamlit Completion": 0,
    "Gen AI Arcade Game Completion": 0,
    "Sum": 0,
    "All 3 Pathways Completed - Yes or No": "No",
    "Campaign Code Redemption Status": "No"
  },
  {
    "User Name": "Varenya Manoj Barve",
    "User Email": "21070023@ycce.in",
    "Google Cloud Skills Boost Profile URL": "https://www.cloudskillsboost.google/public_profiles/5f8859e1-7f7d-4582-9920-026580b6ccb9",
    "Profile URL Status": "All Good",
    "Prompt Design in Vertex AI Completion": 0,
    "Develop GenAI Apps with Gemini and Streamlit Completion": 0,
    "Gen AI Arcade Game Completion": 0,
    "Sum": 0,
    "All 3 Pathways Completed - Yes or No": "No",
    "Campaign Code Redemption Status": "No"
  },
  {
    "User Name": "Humanshu D G",
    "User Email": "humanshudg.ycce@gmail.com",
    "Google Cloud Skills Boost Profile URL": "https://www.cloudskillsboost.google/public_profiles/b0600b20-5ffe-44b7-9881-8662650829bc",
    "Profile URL Status": "All Good",
    "Prompt Design in Vertex AI Completion": 0,
    "Develop GenAI Apps with Gemini and Streamlit Completion": 0,
    "Gen AI Arcade Game Completion": 0,
    "Sum": 0,
    "All 3 Pathways Completed - Yes or No": "No",
    "Campaign Code Redemption Status": "Yes"
  },
  {
    "User Name": "Sanskar Prashant Sawane",
    "User Email": "sawanesanskar07@gmail.com",
    "Google Cloud Skills Boost Profile URL": "https://www.cloudskillsboost.google/public_profiles/7fcedec0-ec16-4c7b-9349-bae91b2b3f4d",
    "Profile URL Status": "All Good",
    "Prompt Design in Vertex AI Completion": 0,
    "Develop GenAI Apps with Gemini and Streamlit Completion": 0,
    "Gen AI Arcade Game Completion": 0,
    "Sum": 0,
    "All 3 Pathways Completed - Yes or No": "No",
    "Campaign Code Redemption Status": "No"
  },
  {
    "User Name": "Rohini Nahate",
    "User Email": "rdnahate@gmail.com",
    "Google Cloud Skills Boost Profile URL": "https://www.cloudskillsboost.google/public_profiles/9ea445a4-673c-4643-a920-66090deab09d",
    "Profile URL Status": "All Good",
    "Prompt Design in Vertex AI Completion": 0,
    "Develop GenAI Apps with Gemini and Streamlit Completion": 0,
    "Gen AI Arcade Game Completion": 0,
    "Sum": 0,
    "All 3 Pathways Completed - Yes or No": "No",
    "Campaign Code Redemption Status": "Yes"
  },
  {
    "User Name": "Ashish Govindrao Choudhary",
    "User Email": "22071076@ycce.in",
    "Google Cloud Skills Boost Profile URL": "https://www.cloudskillsboost.google/public_profiles/bf41591e-f40c-41d8-bcca-9369a989d0cd",
    "Profile URL Status": "All Good",
    "Prompt Design in Vertex AI Completion": 0,
    "Develop GenAI Apps with Gemini and Streamlit Completion": 0,
    "Gen AI Arcade Game Completion": 0,
    "Sum": 0,
    "All 3 Pathways Completed - Yes or No": "No",
    "Campaign Code Redemption Status": "No"
  },
  {
    "User Name": "Aditya Adlak",
    "User Email": "adityaadlak70@gmail.com",
    "Google Cloud Skills Boost Profile URL": "https://www.cloudskillsboost.google/public_profiles/308f21e0-169e-446a-b526-7474fdd90101",
    "Profile URL Status": "All Good",
    "Prompt Design in Vertex AI Completion": 0,
    "Develop GenAI Apps with Gemini and Streamlit Completion": 0,
    "Gen AI Arcade Game Completion": 0,
    "Sum": 0,
    "All 3 Pathways Completed - Yes or No": "No",
    "Campaign Code Redemption Status": "No"
  },
  {
    "User Name": "Nidhi Santosh Ambatkar",
    "User Email": "nidhiambatkar@gmail.com",
    "Google Cloud Skills Boost Profile URL": "https://www.cloudskillsboost.google/public_profiles/45ea3ce7-ba54-4432-90e8-6bf3c74778b1",
    "Profile URL Status": "All Good",
    "Prompt Design in Vertex AI Completion": 0,
    "Develop GenAI Apps with Gemini and Streamlit Completion": 0,
    "Gen AI Arcade Game Completion": 0,
    "Sum": 0,
    "All 3 Pathways Completed - Yes or No": "No",
    "Campaign Code Redemption Status": "No"
  },
  {
    "User Name": "Alok Roy",
    "User Email": "alokprakashroy123@gmail.com",
    "Google Cloud Skills Boost Profile URL": "https://www.cloudskillsboost.google/public_profiles/d9e0a630-1e34-4180-b6b7-b717a74b7fb0",
    "Profile URL Status": "All Good",
    "Prompt Design in Vertex AI Completion": 0,
    "Develop GenAI Apps with Gemini and Streamlit Completion": 0,
    "Gen AI Arcade Game Completion": 0,
    "Sum": 0,
    "All 3 Pathways Completed - Yes or No": "No",
    "Campaign Code Redemption Status": "No"
  },
  {
    "User Name": "Mohit kishor sawai",
    "User Email": "mohitsawai01@gmail.com",
    "Google Cloud Skills Boost Profile URL": "https://www.cloudskillsboost.google/public_profiles/4c4abc9d-302d-426f-87fc-c95f30c483c0",
    "Profile URL Status": "All Good",
    "Prompt Design in Vertex AI Completion": 0,
    "Develop GenAI Apps with Gemini and Streamlit Completion": 0,
    "Gen AI Arcade Game Completion": 0,
    "Sum": 0,
    "All 3 Pathways Completed - Yes or No": "No",
    "Campaign Code Redemption Status": "Yes"
  },
  {
    "User Name": "Vaishnavi choudhari",
    "User Email": "vaishnavichoudhari119@gmail.com",
    "Google Cloud Skills Boost Profile URL": "https://www.cloudskillsboost.google/public_profiles/a4bf3ab9-dead-4fd9-8ea4-96c3d680ac79",
    "Profile URL Status": "All Good",
    "Prompt Design in Vertex AI Completion": 0,
    "Develop GenAI Apps with Gemini and Streamlit Completion": 0,
    "Gen AI Arcade Game Completion": 0,
    "Sum": 0,
    "All 3 Pathways Completed - Yes or No": "No",
    "Campaign Code Redemption Status": "No"
  },
  {
    "User Name": "Neha Kailash Chatap",
    "User Email": "nehakchatap@gmail.com",
    "Google Cloud Skills Boost Profile URL": "https://www.cloudskillsboost.google/public_profiles/4f867735-7f7d-47b7-87d1-27b3844bb7f7",
    "Profile URL Status": "All Good",
    "Prompt Design in Vertex AI Completion": 0,
    "Develop GenAI Apps with Gemini and Streamlit Completion": 0,
    "Gen AI Arcade Game Completion": 0,
    "Sum": 0,
    "All 3 Pathways Completed - Yes or No": "No",
    "Campaign Code Redemption Status": "No"
  },
  {
    "User Name": "Abhiruchi Arvind Patil Bhagat",
    "User Email": "abhipatilngp@gmail.com",
    "Google Cloud Skills Boost Profile URL": "https://www.cloudskillsboost.google/public_profiles/add8c766-411c-4483-913f-4ecefc8348da",
    "Profile URL Status": "All Good",
    "Prompt Design in Vertex AI Completion": 0,
    "Develop GenAI Apps with Gemini and Streamlit Completion": 0,
    "Gen AI Arcade Game Completion": 0,
    "Sum": 0,
    "All 3 Pathways Completed - Yes or No": "No",
    "Campaign Code Redemption Status": "No"
  },
  {
    "User Name": "Ayush Ravindra Meshram",
    "User Email": "aayushmeshram9168@gmail.com",
    "Google Cloud Skills Boost Profile URL": "https://www.cloudskillsboost.google/public_profiles/41de18ac-d057-4886-a577-ef8c1c5c06d7",
    "Profile URL Status": "All Good",
    "Prompt Design in Vertex AI Completion": 0,
    "Develop GenAI Apps with Gemini and Streamlit Completion": 0,
    "Gen AI Arcade Game Completion": 0,
    "Sum": 0,
    "All 3 Pathways Completed - Yes or No": "No",
    "Campaign Code Redemption Status": "Yes"
  },
  {
    "User Name": "Shruti Kathale",
    "User Email": "shrutikathale1@gmail.com",
    "Google Cloud Skills Boost Profile URL": "https://www.cloudskillsboost.google/public_profiles/e5b24aae-c32f-44b1-9c9d-a7955da82d20",
    "Profile URL Status": "All Good",
    "Prompt Design in Vertex AI Completion": 0,
    "Develop GenAI Apps with Gemini and Streamlit Completion": 0,
    "Gen AI Arcade Game Completion": 0,
    "Sum": 0,
    "All 3 Pathways Completed - Yes or No": "No",
    "Campaign Code Redemption Status": "No"
  },
  {
    "User Name": "Prasanna Nagpure",
    "User Email": "prasannanagpure55@gmail.com",
    "Google Cloud Skills Boost Profile URL": "https://www.cloudskillsboost.google/public_profiles/e9fcd681-ade6-4c60-874f-9465d9c9f31e",
    "Profile URL Status": "All Good",
    "Prompt Design in Vertex AI Completion": 0,
    "Develop GenAI Apps with Gemini and Streamlit Completion": 0,
    "Gen AI Arcade Game Completion": 0,
    "Sum": 0,
    "All 3 Pathways Completed - Yes or No": "No",
    "Campaign Code Redemption Status": "No"
  },
  {
    "User Name": "Manaswi Padole",
    "User Email": "21070071@ycce.in",
    "Google Cloud Skills Boost Profile URL": "https://www.cloudskillsboost.google/public_profiles/7ce7a38a-1b0c-44f8-8f80-af1032d93909",
    "Profile URL Status": "All Good",
    "Prompt Design in Vertex AI Completion": 0,
    "Develop GenAI Apps with Gemini and Streamlit Completion": 0,
    "Gen AI Arcade Game Completion": 0,
    "Sum": 0,
    "All 3 Pathways Completed - Yes or No": "No",
    "Campaign Code Redemption Status": "No"
  },
  {
    "User Name": "Srushti Bawane",
    "User Email": "srushtibawane167@gmail.com",
    "Google Cloud Skills Boost Profile URL": "https://www.cloudskillsboost.google/public_profiles/de2f15c0-e053-49bc-9993-e5deeb6cef23",
    "Profile URL Status": "All Good",
    "Prompt Design in Vertex AI Completion": 0,
    "Develop GenAI Apps with Gemini and Streamlit Completion": 0,
    "Gen AI Arcade Game Completion": 0,
    "Sum": 0,
    "All 3 Pathways Completed - Yes or No": "No",
    "Campaign Code Redemption Status": "No"
  },
  {
    "User Name": "Shivam Denge",
    "User Email": "shivamdenge725@gmail.com",
    "Google Cloud Skills Boost Profile URL": "https://www.cloudskillsboost.google/public_profiles/4c63bcda-18b9-49d5-ad66-b86714e02286",
    "Profile URL Status": "All Good",
    "Prompt Design in Vertex AI Completion": 0,
    "Develop GenAI Apps with Gemini and Streamlit Completion": 0,
    "Gen AI Arcade Game Completion": 0,
    "Sum": 0,
    "All 3 Pathways Completed - Yes or No": "No",
    "Campaign Code Redemption Status": "Yes"
  },
  {
    "User Name": "Adwait Raich",
    "User Email": "adwaitraich01@gmail.com",
    "Google Cloud Skills Boost Profile URL": "https://www.cloudskillsboost.google/public_profiles/b1063e16-b003-481c-a83c-fb6d7776c08e",
    "Profile URL Status": "All Good",
    "Prompt Design in Vertex AI Completion": 0,
    "Develop GenAI Apps with Gemini and Streamlit Completion": 0,
    "Gen AI Arcade Game Completion": 0,
    "Sum": 0,
    "All 3 Pathways Completed - Yes or No": "No",
    "Campaign Code Redemption Status": "No"
  },
  {
    "User Name": "Shivani Upganlawar",
    "User Email": "22070426@ycce.in",
    "Google Cloud Skills Boost Profile URL": "https://www.cloudskillsboost.google/public_profiles/520ea45c-a1dc-46f9-8dab-36a76b4bdc3a",
    "Profile URL Status": "All Good",
    "Prompt Design in Vertex AI Completion": 0,
    "Develop GenAI Apps with Gemini and Streamlit Completion": 0,
    "Gen AI Arcade Game Completion": 0,
    "Sum": 0,
    "All 3 Pathways Completed - Yes or No": "No",
    "Campaign Code Redemption Status": "No"
  },
  {
    "User Name": "Nikhil Kamble",
    "User Email": "thenkcode@gmail.com",
    "Google Cloud Skills Boost Profile URL": "https://www.cloudskillsboost.google/public_profiles/aec9d74e-7d99-4048-943e-660a90dcd239",
    "Profile URL Status": "All Good",
    "Prompt Design in Vertex AI Completion": 0,
    "Develop GenAI Apps with Gemini and Streamlit Completion": 0,
    "Gen AI Arcade Game Completion": 0,
    "Sum": 0,
    "All 3 Pathways Completed - Yes or No": "No",
    "Campaign Code Redemption Status": "Yes"
  },
  {
    "User Name": "Pranay Durutkar",
    "User Email": "pranaydurutkar2804@gmail.com",
    "Google Cloud Skills Boost Profile URL": "https://www.cloudskillsboost.google/public_profiles/29268b76-fdc3-4924-a53c-90b8a3a96c34",
    "Profile URL Status": "All Good",
    "Prompt Design in Vertex AI Completion": 0,
    "Develop GenAI Apps with Gemini and Streamlit Completion": 0,
    "Gen AI Arcade Game Completion": 0,
    "Sum": 0,
    "All 3 Pathways Completed - Yes or No": "No",
    "Campaign Code Redemption Status": "Yes"
  },
  {
    "User Name": "Ayush Vinod Bhusari",
    "User Email": "bhusari.ayush22@gmail.com",
    "Google Cloud Skills Boost Profile URL": "https://www.cloudskillsboost.google/public_profiles/84e4e798-8ea5-4f5f-8f92-985dc395dbf1",
    "Profile URL Status": "All Good",
    "Prompt Design in Vertex AI Completion": 0,
    "Develop GenAI Apps with Gemini and Streamlit Completion": 0,
    "Gen AI Arcade Game Completion": 0,
    "Sum": 0,
    "All 3 Pathways Completed - Yes or No": "No",
    "Campaign Code Redemption Status": "No"
  },
  {
    "User Name": "Ayush Turak",
    "User Email": "turakayush@gmail.com",
    "Google Cloud Skills Boost Profile URL": "https://www.cloudskillsboost.google/public_profiles/dda1ba0c-123e-40f9-85ee-60b854c949d5",
    "Profile URL Status": "All Good",
    "Prompt Design in Vertex AI Completion": 0,
    "Develop GenAI Apps with Gemini and Streamlit Completion": 0,
    "Gen AI Arcade Game Completion": 0,
    "Sum": 0,
    "All 3 Pathways Completed - Yes or No": "No",
    "Campaign Code Redemption Status": "No"
  },
  {
    "User Name": "Karan Baghele",
    "User Email": "karanbaghele1@gmail.com",
    "Google Cloud Skills Boost Profile URL": "https://www.cloudskillsboost.google/public_profiles/1a59dc5b-96dc-4229-8a6e-8b124a0ceca9",
    "Profile URL Status": "All Good",
    "Prompt Design in Vertex AI Completion": 0,
    "Develop GenAI Apps with Gemini and Streamlit Completion": 0,
    "Gen AI Arcade Game Completion": 0,
    "Sum": 0,
    "All 3 Pathways Completed - Yes or No": "No",
    "Campaign Code Redemption Status": "Yes"
  },
  {
    "User Name": "Aarohi Arvind waghmare",
    "User Email": "aarohiwaghmare480@gmail.com",
    "Google Cloud Skills Boost Profile URL": "https://www.cloudskillsboost.google/public_profiles/ff9d0a68-422f-48fa-a553-cdcb6d6b39db",
    "Profile URL Status": "All Good",
    "Prompt Design in Vertex AI Completion": 0,
    "Develop GenAI Apps with Gemini and Streamlit Completion": 0,
    "Gen AI Arcade Game Completion": 0,
    "Sum": 0,
    "All 3 Pathways Completed - Yes or No": "No",
    "Campaign Code Redemption Status": "No"
  },
  {
    "User Name": "Sudhanshu Burile",
    "User Email": "sudhaanshuu04@gmail.com",
    "Google Cloud Skills Boost Profile URL": "https://www.cloudskillsboost.google/public_profiles/c631921f-2b8a-4f31-9a80-497880cff71c",
    "Profile URL Status": "All Good",
    "Prompt Design in Vertex AI Completion": 0,
    "Develop GenAI Apps with Gemini and Streamlit Completion": 0,
    "Gen AI Arcade Game Completion": 0,
    "Sum": 0,
    "All 3 Pathways Completed - Yes or No": "No",
    "Campaign Code Redemption Status": "No"
  },
  {
    "User Name": "Vedant Balpande",
    "User Email": "vedantbalpande2005@gmail.com",
    "Google Cloud Skills Boost Profile URL": "http://www.cloudskillsboost.google/public_profiles/e9cb0516-9f4c-468e-83ba-bd1c87beeec2",
    "Profile URL Status": "All Good",
    "Prompt Design in Vertex AI Completion": 0,
    "Develop GenAI Apps with Gemini and Streamlit Completion": 0,
    "Gen AI Arcade Game Completion": 0,
    "Sum": 0,
    "All 3 Pathways Completed - Yes or No": "No",
    "Campaign Code Redemption Status": "Yes"
  },
  {
    "User Name": "Pratiksha Haridas Rathod",
    "User Email": "rathodpratiksha334@gmail.com",
    "Google Cloud Skills Boost Profile URL": "https://www.cloudskillsboost.google/public_profiles/00e2724e-0c55-4faf-aa61-ca69e9326543",
    "Profile URL Status": "All Good",
    "Prompt Design in Vertex AI Completion": 0,
    "Develop GenAI Apps with Gemini and Streamlit Completion": 0,
    "Gen AI Arcade Game Completion": 0,
    "Sum": 0,
    "All 3 Pathways Completed - Yes or No": "No",
    "Campaign Code Redemption Status": "Yes"
  },
  {
    "User Name": "Swaraj kadu",
    "User Email": "swarajkadu3@gmail.com",
    "Google Cloud Skills Boost Profile URL": "https://www.cloudskillsboost.google/public_profiles/1420e59c-dd3c-4a51-9409-9b1d43f69362",
    "Profile URL Status": "All Good",
    "Prompt Design in Vertex AI Completion": 0,
    "Develop GenAI Apps with Gemini and Streamlit Completion": 0,
    "Gen AI Arcade Game Completion": 0,
    "Sum": 0,
    "All 3 Pathways Completed - Yes or No": "No",
    "Campaign Code Redemption Status": "No"
  },
  {
    "User Name": "Lakshya kumar gupta",
    "User Email": "23070164@ycce.in",
    "Google Cloud Skills Boost Profile URL": "https://www.cloudskillsboost.google/public_profiles/73ff6350-d9e9-4659-816f-5ca323f72814",
    "Profile URL Status": "All Good",
    "Prompt Design in Vertex AI Completion": 0,
    "Develop GenAI Apps with Gemini and Streamlit Completion": 0,
    "Gen AI Arcade Game Completion": 0,
    "Sum": 0,
    "All 3 Pathways Completed - Yes or No": "No",
    "Campaign Code Redemption Status": "Yes"
  },
  {
    "User Name": "Shreya Ladke",
    "User Email": "shreyaladke91@gmail.com",
    "Google Cloud Skills Boost Profile URL": "https://www.cloudskillsboost.google/public_profiles/782fd62d-ad59-4c72-a8e7-da6730a3cc90",
    "Profile URL Status": "All Good",
    "Prompt Design in Vertex AI Completion": 0,
    "Develop GenAI Apps with Gemini and Streamlit Completion": 0,
    "Gen AI Arcade Game Completion": 0,
    "Sum": 0,
    "All 3 Pathways Completed - Yes or No": "No",
    "Campaign Code Redemption Status": "No"
  },
  {
    "User Name": "Isheeta Dabrase",
    "User Email": "isheetadabrase78@gmail.com",
    "Google Cloud Skills Boost Profile URL": "https://www.cloudskillsboost.google/public_profiles/43a1c5bc-481c-4d2e-b681-6e9f69349bf6",
    "Profile URL Status": "All Good",
    "Prompt Design in Vertex AI Completion": 0,
    "Develop GenAI Apps with Gemini and Streamlit Completion": 0,
    "Gen AI Arcade Game Completion": 0,
    "Sum": 0,
    "All 3 Pathways Completed - Yes or No": "No",
    "Campaign Code Redemption Status": "No"
  },
  {
    "User Name": "Anurag Narendra Borkar",
    "User Email": "anuragborkar2005@gmail.com",
    "Google Cloud Skills Boost Profile URL": "https://www.cloudskillsboost.google/public_profiles/c9ead073-0e89-417d-ab57-f9cbfe12a878",
    "Profile URL Status": "All Good",
    "Prompt Design in Vertex AI Completion": 0,
    "Develop GenAI Apps with Gemini and Streamlit Completion": 0,
    "Gen AI Arcade Game Completion": 0,
    "Sum": 0,
    "All 3 Pathways Completed - Yes or No": "No",
    "Campaign Code Redemption Status": "Yes"
  },
  {
    "User Name": "Vedant Raut",
    "User Email": "vedantraut0601@gmail.com",
    "Google Cloud Skills Boost Profile URL": "https://www.cloudskillsboost.google/public_profiles/79b9151e-f701-4387-9d5f-77ac2f40f54f",
    "Profile URL Status": "All Good",
    "Prompt Design in Vertex AI Completion": 0,
    "Develop GenAI Apps with Gemini and Streamlit Completion": 0,
    "Gen AI Arcade Game Completion": 0,
    "Sum": 0,
    "All 3 Pathways Completed - Yes or No": "No",
    "Campaign Code Redemption Status": "No"
  },
  {
    "User Name": "Kalpak pramod bhope",
    "User Email": "bhopekalpak@gmail.com",
    "Google Cloud Skills Boost Profile URL": "https://www.cloudskillsboost.google/public_profiles/54d2dfb7-b08a-415c-99e2-5f1412ea1f08",
    "Profile URL Status": "All Good",
    "Prompt Design in Vertex AI Completion": 0,
    "Develop GenAI Apps with Gemini and Streamlit Completion": 0,
    "Gen AI Arcade Game Completion": 0,
    "Sum": 0,
    "All 3 Pathways Completed - Yes or No": "No",
    "Campaign Code Redemption Status": "No"
  },
  {
    "User Name": "Aastha Nagpure",
    "User Email": "nagpureaastha44@gmail.com",
    "Google Cloud Skills Boost Profile URL": "https://www.cloudskillsboost.google/public_profiles/5c3c6cb5-31f0-44f5-bfdf-f770708bef1e",
    "Profile URL Status": "All Good",
    "Prompt Design in Vertex AI Completion": 0,
    "Develop GenAI Apps with Gemini and Streamlit Completion": 0,
    "Gen AI Arcade Game Completion": 0,
    "Sum": 0,
    "All 3 Pathways Completed - Yes or No": "No",
    "Campaign Code Redemption Status": "Yes"
  },
  {
    "User Name": "Akshay Chakradhar Mahalle",
    "User Email": "akshaymahalle005@gmail.com",
    "Google Cloud Skills Boost Profile URL": "https://www.cloudskillsboost.google/public_profiles/939010ed-7229-4058-a2d7-3b5d591e3657",
    "Profile URL Status": "All Good",
    "Prompt Design in Vertex AI Completion": 0,
    "Develop GenAI Apps with Gemini and Streamlit Completion": 0,
    "Gen AI Arcade Game Completion": 0,
    "Sum": 0,
    "All 3 Pathways Completed - Yes or No": "No",
    "Campaign Code Redemption Status": "Yes"
  },
  {
    "User Name": "Srujani Sanjay Zanzad",
    "User Email": "23071155@ycce.in",
    "Google Cloud Skills Boost Profile URL": "https://www.cloudskillsboost.google/public_profiles/0887cf59-828c-4ee5-8d91-c6e2175f8507",
    "Profile URL Status": "All Good",
    "Prompt Design in Vertex AI Completion": 0,
    "Develop GenAI Apps with Gemini and Streamlit Completion": 0,
    "Gen AI Arcade Game Completion": 0,
    "Sum": 0,
    "All 3 Pathways Completed - Yes or No": "No",
    "Campaign Code Redemption Status": "Yes"
  },
  {
    "User Name": "Mrunali Prakash Nimje",
    "User Email": "23070166@ycce.in",
    "Google Cloud Skills Boost Profile URL": "https://www.cloudskillsboost.google/public_profiles/355dc330-543c-4751-850c-64206885eef5",
    "Profile URL Status": "All Good",
    "Prompt Design in Vertex AI Completion": 0,
    "Develop GenAI Apps with Gemini and Streamlit Completion": 0,
    "Gen AI Arcade Game Completion": 0,
    "Sum": 0,
    "All 3 Pathways Completed - Yes or No": "No",
    "Campaign Code Redemption Status": "No"
  },
  {
    "User Name": "Nehal Shahu",
    "User Email": "nehalshahu18@gmail.com",
    "Google Cloud Skills Boost Profile URL": "https://www.cloudskillsboost.google/public_profiles/c0274e4f-dc76-4261-9863-a93edef0ccb5",
    "Profile URL Status": "All Good",
    "Prompt Design in Vertex AI Completion": 0,
    "Develop GenAI Apps with Gemini and Streamlit Completion": 0,
    "Gen AI Arcade Game Completion": 0,
    "Sum": 0,
    "All 3 Pathways Completed - Yes or No": "No",
    "Campaign Code Redemption Status": "Yes"
  },
  {
    "User Name": "Nutan Manohar Yelane",
    "User Email": "23070767@ycce.in",
    "Google Cloud Skills Boost Profile URL": "https://www.cloudskillsboost.google/public_profiles/c094f47e-f622-438d-9d0f-addc6dcf5ebd",
    "Profile URL Status": "All Good",
    "Prompt Design in Vertex AI Completion": 0,
    "Develop GenAI Apps with Gemini and Streamlit Completion": 0,
    "Gen AI Arcade Game Completion": 0,
    "Sum": 0,
    "All 3 Pathways Completed - Yes or No": "No",
    "Campaign Code Redemption Status": "No"
  },
  {
    "User Name": "Kishor Chate",
    "User Email": "23070454@ycce.in",
    "Google Cloud Skills Boost Profile URL": "https://www.cloudskillsboost.google/public_profiles/17deda01-84cf-4101-b168-58ca8f77dad4",
    "Profile URL Status": "All Good",
    "Prompt Design in Vertex AI Completion": 0,
    "Develop GenAI Apps with Gemini and Streamlit Completion": 0,
    "Gen AI Arcade Game Completion": 0,
    "Sum": 0,
    "All 3 Pathways Completed - Yes or No": "No",
    "Campaign Code Redemption Status": "No"
  },
  {
    "User Name": "Mahesh Shastrakar",
    "User Email": "maheshshastrakar123@gmail.com",
    "Google Cloud Skills Boost Profile URL": "https://www.cloudskillsboost.google/public_profiles/9bb5febc-b897-4a92-9175-be1b68a50d43",
    "Profile URL Status": "All Good",
    "Prompt Design in Vertex AI Completion": 0,
    "Develop GenAI Apps with Gemini and Streamlit Completion": 0,
    "Gen AI Arcade Game Completion": 0,
    "Sum": 0,
    "All 3 Pathways Completed - Yes or No": "No",
    "Campaign Code Redemption Status": "No"
  },
  {
    "User Name": "Chaitanya Atul Awale",
    "User Email": "chaitanyaawale90@gmail.com",
    "Google Cloud Skills Boost Profile URL": "https://www.cloudskillsboost.google/public_profiles/478ab900-5365-4872-bd37-2f371c408dad",
    "Profile URL Status": "All Good",
    "Prompt Design in Vertex AI Completion": 0,
    "Develop GenAI Apps with Gemini and Streamlit Completion": 0,
    "Gen AI Arcade Game Completion": 0,
    "Sum": 0,
    "All 3 Pathways Completed - Yes or No": "No",
    "Campaign Code Redemption Status": "Yes"
  },
  {
    "User Name": "Ved Suresh Kale",
    "User Email": "vedkale96@gmail.com",
    "Google Cloud Skills Boost Profile URL": "https://www.cloudskillsboost.google/public_profiles/a68547b2-1998-462d-916c-d0a397a18174",
    "Profile URL Status": "All Good",
    "Prompt Design in Vertex AI Completion": 0,
    "Develop GenAI Apps with Gemini and Streamlit Completion": 0,
    "Gen AI Arcade Game Completion": 0,
    "Sum": 0,
    "All 3 Pathways Completed - Yes or No": "No",
    "Campaign Code Redemption Status": "No"
  },
  {
    "User Name": "SHIVAM SARAF",
    "User Email": "shivamgdsc750@gmail.com",
    "Google Cloud Skills Boost Profile URL": "https://www.cloudskillsboost.google/public_profiles/336f086b-2977-49cf-b9f0-18d48c311ab2",
    "Profile URL Status": "All Good",
    "Prompt Design in Vertex AI Completion": 0,
    "Develop GenAI Apps with Gemini and Streamlit Completion": 0,
    "Gen AI Arcade Game Completion": 0,
    "Sum": 0,
    "All 3 Pathways Completed - Yes or No": "No",
    "Campaign Code Redemption Status": "Yes"
  },
  {
    "User Name": "Falguni Mowade",
    "User Email": "falgunimowade123@gmail.com",
    "Google Cloud Skills Boost Profile URL": "https://www.cloudskillsboost.google/public_profiles/4db9e211-ca1a-4866-8590-be8849a0069b",
    "Profile URL Status": "All Good",
    "Prompt Design in Vertex AI Completion": 0,
    "Develop GenAI Apps with Gemini and Streamlit Completion": 0,
    "Gen AI Arcade Game Completion": 0,
    "Sum": 0,
    "All 3 Pathways Completed - Yes or No": "No",
    "Campaign Code Redemption Status": "No"
  },
  {
    "User Name": "Falguni Uikey",
    "User Email": "uikefalguni@gmail.com",
    "Google Cloud Skills Boost Profile URL": "https://www.cloudskillsboost.google/public_profiles/ee5b5522-8971-4a46-8f66-49827ff9f58c",
    "Profile URL Status": "All Good",
    "Prompt Design in Vertex AI Completion": 0,
    "Develop GenAI Apps with Gemini and Streamlit Completion": 0,
    "Gen AI Arcade Game Completion": 0,
    "Sum": 0,
    "All 3 Pathways Completed - Yes or No": "No",
    "Campaign Code Redemption Status": "No"
  },
  {
    "User Name": "Rugved Bhandarkar",
    "User Email": "bhandarkarrugved@gmail.com",
    "Google Cloud Skills Boost Profile URL": "https://www.cloudskillsboost.google/public_profiles/fb4d4712-9350-496b-a7a7-efdb79615b6d",
    "Profile URL Status": "All Good",
    "Prompt Design in Vertex AI Completion": 0,
    "Develop GenAI Apps with Gemini and Streamlit Completion": 0,
    "Gen AI Arcade Game Completion": 0,
    "Sum": 0,
    "All 3 Pathways Completed - Yes or No": "No",
    "Campaign Code Redemption Status": "No"
  },
  {
    "User Name": "Prachi Prashantrao Gulande",
    "User Email": "prachigulande4@gmail.com",
    "Google Cloud Skills Boost Profile URL": "https://www.cloudskillsboost.google/public_profiles/f0dd58a6-303a-4ea0-ae41-9bb3271278f9",
    "Profile URL Status": "All Good",
    "Prompt Design in Vertex AI Completion": 0,
    "Develop GenAI Apps with Gemini and Streamlit Completion": 0,
    "Gen AI Arcade Game Completion": 0,
    "Sum": 0,
    "All 3 Pathways Completed - Yes or No": "No",
    "Campaign Code Redemption Status": "No"
  },
  {
    "User Name": "Aaryan Manoj Padole",
    "User Email": "aaryanpadole2122@gmail.com",
    "Google Cloud Skills Boost Profile URL": "https://www.cloudskillsboost.google/public_profiles/43d5d5a8-7c35-4ceb-81d6-b1c1b3f62d01",
    "Profile URL Status": "All Good",
    "Prompt Design in Vertex AI Completion": 0,
    "Develop GenAI Apps with Gemini and Streamlit Completion": 0,
    "Gen AI Arcade Game Completion": 0,
    "Sum": 0,
    "All 3 Pathways Completed - Yes or No": "No",
    "Campaign Code Redemption Status": "Yes"
  },
  {
    "User Name": "Sakshi Ganesh Ganyarpawar",
    "User Email": "sakshiganyarpawar263@gmail.com",
    "Google Cloud Skills Boost Profile URL": "https://www.cloudskillsboost.google/public_profiles/2aef108c-ad03-4eac-b1bb-ea762e47392a",
    "Profile URL Status": "All Good",
    "Prompt Design in Vertex AI Completion": 0,
    "Develop GenAI Apps with Gemini and Streamlit Completion": 0,
    "Gen AI Arcade Game Completion": 0,
    "Sum": 0,
    "All 3 Pathways Completed - Yes or No": "No",
    "Campaign Code Redemption Status": "No"
  },
  {
    "User Name": "Aryan Palsapure",
    "User Email": "aryanpalsapurevip@gmail.com",
    "Google Cloud Skills Boost Profile URL": "https://www.cloudskillsboost.google/public_profiles/8b76a2f1-36ec-4d7d-9d1f-e6f0a8f0250e",
    "Profile URL Status": "Wrong Google Cloud Skills Boost Public Profile URL",
    "Prompt Design in Vertex AI Completion": 0,
    "Develop GenAI Apps with Gemini and Streamlit Completion": 0,
    "Gen AI Arcade Game Completion": 0,
    "Sum": 0,
    "All 3 Pathways Completed - Yes or No": "No",
    "Campaign Code Redemption Status": "Yes"
  },
  {
    "User Name": "Prajat Jibhe",
    "User Email": "prajatjibhe@gmail.com",
    "Google Cloud Skills Boost Profile URL": "https://www.cloudskillsboost.google/public_profiles/176ce918-cf30-4c6e-bb26-f965732687b7",
    "Profile URL Status": "All Good",
    "Prompt Design in Vertex AI Completion": 0,
    "Develop GenAI Apps with Gemini and Streamlit Completion": 0,
    "Gen AI Arcade Game Completion": 0,
    "Sum": 0,
    "All 3 Pathways Completed - Yes or No": "No",
    "Campaign Code Redemption Status": "No"
  },
  {
    "User Name": "Guruvesh Wankhede",
    "User Email": "guruveshwankhede@gmail.com",
    "Google Cloud Skills Boost Profile URL": "https://www.cloudskillsboost.google/public_profiles/95a40aef-1474-4875-960c-dc6740adc793",
    "Profile URL Status": "All Good",
    "Prompt Design in Vertex AI Completion": 0,
    "Develop GenAI Apps with Gemini and Streamlit Completion": 0,
    "Gen AI Arcade Game Completion": 0,
    "Sum": 0,
    "All 3 Pathways Completed - Yes or No": "No",
    "Campaign Code Redemption Status": "Yes"
  },
  {
    "User Name": "Pooja Nandguruwar",
    "User Email": "nandguruwarpooja05@gmail.com",
    "Google Cloud Skills Boost Profile URL": "https://www.cloudskillsboost.google/public_profiles/9eb0ba7c-d2cf-45a8-bf92-0294b1f4fa12",
    "Profile URL Status": "All Good",
    "Prompt Design in Vertex AI Completion": 0,
    "Develop GenAI Apps with Gemini and Streamlit Completion": 0,
    "Gen AI Arcade Game Completion": 0,
    "Sum": 0,
    "All 3 Pathways Completed - Yes or No": "No",
    "Campaign Code Redemption Status": "Yes"
  },
  {
    "User Name": "Naman kadokar",
    "User Email": "namankadokar9@gmail.com",
    "Google Cloud Skills Boost Profile URL": "https://www.cloudskillsboost.google/public_profiles/e0620184-b679-4b48-a9ef-b4b2f7817127",
    "Profile URL Status": "All Good",
    "Prompt Design in Vertex AI Completion": 0,
    "Develop GenAI Apps with Gemini and Streamlit Completion": 0,
    "Gen AI Arcade Game Completion": 0,
    "Sum": 0,
    "All 3 Pathways Completed - Yes or No": "No",
    "Campaign Code Redemption Status": "No"
  },
  {
    "User Name": "Sanskar Mange",
    "User Email": "sanskar.mange54@gmail.com",
    "Google Cloud Skills Boost Profile URL": "https://www.cloudskillsboost.google/public_profiles/7e98aea8-be75-4a33-abc8-8106ec68f30d",
    "Profile URL Status": "All Good",
    "Prompt Design in Vertex AI Completion": 0,
    "Develop GenAI Apps with Gemini and Streamlit Completion": 0,
    "Gen AI Arcade Game Completion": 0,
    "Sum": 0,
    "All 3 Pathways Completed - Yes or No": "No",
    "Campaign Code Redemption Status": "Yes"
  },
  {
    "User Name": "Mohit Pandurang Nakhate",
    "User Email": "mpnakhate@gmail.com",
    "Google Cloud Skills Boost Profile URL": "https://www.cloudskillsboost.google/public_profiles/7b0e5b46-2cff-4a9a-a9dc-31a6018935d7",
    "Profile URL Status": "All Good",
    "Prompt Design in Vertex AI Completion": 0,
    "Develop GenAI Apps with Gemini and Streamlit Completion": 0,
    "Gen AI Arcade Game Completion": 0,
    "Sum": 0,
    "All 3 Pathways Completed - Yes or No": "No",
    "Campaign Code Redemption Status": "Yes"
  },
  {
    "User Name": "Aarohi Dabhadkar",
    "User Email": "dabhadkaraarohi@gmail.com",
    "Google Cloud Skills Boost Profile URL": "https://www.cloudskillsboost.google/public_profiles/e988a5bd-e496-496d-9d3e-341f6d3c8951",
    "Profile URL Status": "All Good",
    "Prompt Design in Vertex AI Completion": 0,
    "Develop GenAI Apps with Gemini and Streamlit Completion": 0,
    "Gen AI Arcade Game Completion": 0,
    "Sum": 0,
    "All 3 Pathways Completed - Yes or No": "No",
    "Campaign Code Redemption Status": "No"
  },
  {
    "User Name": "Manasvi Totewar",
    "User Email": "manasvitotewar@gmail.com",
    "Google Cloud Skills Boost Profile URL": "https://www.cloudskillsboost.google/public_profiles/0fcfd919-0f64-48e5-9719-b74aff25ccef",
    "Profile URL Status": "All Good",
    "Prompt Design in Vertex AI Completion": 0,
    "Develop GenAI Apps with Gemini and Streamlit Completion": 0,
    "Gen AI Arcade Game Completion": 0,
    "Sum": 0,
    "All 3 Pathways Completed - Yes or No": "No",
    "Campaign Code Redemption Status": "No"
  },
  {
    "User Name": "Neha Dhawas",
    "User Email": "nehadhawassd@gmail.com",
    "Google Cloud Skills Boost Profile URL": "https://www.cloudskillsboost.google/public_profiles/93bed5ba-aab6-4bd1-bdcd-d21381bd1889",
    "Profile URL Status": "All Good",
    "Prompt Design in Vertex AI Completion": 0,
    "Develop GenAI Apps with Gemini and Streamlit Completion": 0,
    "Gen AI Arcade Game Completion": 0,
    "Sum": 0,
    "All 3 Pathways Completed - Yes or No": "No",
    "Campaign Code Redemption Status": "No"
  },
  {
    "User Name": "Sejal Welekar",
    "User Email": "welekarsejal@gmail.com",
    "Google Cloud Skills Boost Profile URL": "https://www.cloudskillsboost.google/public_profiles/b50a9137-4ddc-4f94-ac10-48318a1f7a98",
    "Profile URL Status": "All Good",
    "Prompt Design in Vertex AI Completion": 0,
    "Develop GenAI Apps with Gemini and Streamlit Completion": 0,
    "Gen AI Arcade Game Completion": 0,
    "Sum": 0,
    "All 3 Pathways Completed - Yes or No": "No",
    "Campaign Code Redemption Status": "No"
  },
  {
    "User Name": "Poorvaj Hinge",
    "User Email": "dedsec755845@gmail.com",
    "Google Cloud Skills Boost Profile URL": "https://www.cloudskillsboost.google/public_profiles/3d2ef4e4-fac6-4c4f-9734-4eb20b3b383b",
    "Profile URL Status": "All Good",
    "Prompt Design in Vertex AI Completion": 0,
    "Develop GenAI Apps with Gemini and Streamlit Completion": 0,
    "Gen AI Arcade Game Completion": 0,
    "Sum": 0,
    "All 3 Pathways Completed - Yes or No": "No",
    "Campaign Code Redemption Status": "Yes"
  },
  {
    "User Name": "Priyanshu Behere",
    "User Email": "priyanshu7behere@gmail.com",
    "Google Cloud Skills Boost Profile URL": "https://www.cloudskillsboost.google/public_profiles/4f5b2983-0e56-4965-8958-ad492ebc8495",
    "Profile URL Status": "All Good",
    "Prompt Design in Vertex AI Completion": 0,
    "Develop GenAI Apps with Gemini and Streamlit Completion": 0,
    "Gen AI Arcade Game Completion": 0,
    "Sum": 0,
    "All 3 Pathways Completed - Yes or No": "No",
    "Campaign Code Redemption Status": "No"
  },
  {
    "User Name": "Aswardha narayana babu Gurram",
    "User Email": "aswardha10@gmail.com",
    "Google Cloud Skills Boost Profile URL": "https://www.cloudskillsboost.google/public_profiles/069702bc-9dd4-450c-b426-ab62dc55814a",
    "Profile URL Status": "All Good",
    "Prompt Design in Vertex AI Completion": 0,
    "Develop GenAI Apps with Gemini and Streamlit Completion": 0,
    "Gen AI Arcade Game Completion": 0,
    "Sum": 0,
    "All 3 Pathways Completed - Yes or No": "No",
    "Campaign Code Redemption Status": "Yes"
  },
  {
    "User Name": "Aniket Wasnik",
    "User Email": "aniketw100@gmail.com",
    "Google Cloud Skills Boost Profile URL": "https://www.cloudskillsboost.google/public_profiles/20cb8cd1-67b4-4439-a58e-807274390f0e",
    "Profile URL Status": "All Good",
    "Prompt Design in Vertex AI Completion": 0,
    "Develop GenAI Apps with Gemini and Streamlit Completion": 0,
    "Gen AI Arcade Game Completion": 0,
    "Sum": 0,
    "All 3 Pathways Completed - Yes or No": "No",
    "Campaign Code Redemption Status": "No"
  },
  {
    "User Name": "Moin Sheikh",
    "User Email": "moinsheikh8010@gmail.com",
    "Google Cloud Skills Boost Profile URL": "https://www.cloudskillsboost.google/public_profiles/e8ea5dd9-8ab3-4d11-970c-5caaf967a437",
    "Profile URL Status": "All Good",
    "Prompt Design in Vertex AI Completion": 0,
    "Develop GenAI Apps with Gemini and Streamlit Completion": 0,
    "Gen AI Arcade Game Completion": 0,
    "Sum": 0,
    "All 3 Pathways Completed - Yes or No": "No",
    "Campaign Code Redemption Status": "Yes"
  }
]



    const [Participationdata, setParticipationdata] = useState([...data]);
    const [EligibleforSwags, setEligibleforSwags] = useState(0);

    useEffect(() => {
        calculateTotalEligibility();
    }, [])

    const calculateTotalEligibility = () => {
        let total = 0;
        data.forEach((ele) => {
            ele["All 3 Pathways Completed - Yes or No"] == "Yes" && total++;
        })
        setEligibleforSwags(total)
    }

    const searchname = (name) => {
        const newArr = [];
        for (let i = 0; i < data.length; i++) {
            let participant = data[i]["User Name"].toLowerCase();
            let match = participant.includes(name.toLowerCase());
            if (match) newArr.push(data[i]);

        }
        // console.log(newArr);
        setParticipationdata(newArr);
    }

    return (
        <div className='w-full relative px-3'>



            <div className="sec m-auto my-10 space-y-8 md:w-1/2 w-full mob:flex mob:flex-col">
               

                <div className="info md:flex md:flex-row  flex flex-col mob:justify-center items-center md:space-y-0 space-y-5 p-5 justify-evenly space-x-0">
                    <div className="eligibleforswag md:w-fit w-full h-20 p-5 space-x-5 rounded-lg flex flex-row justify-evenly mob:justify-between items-center bg-green-50 shadow-lg shadow-green-300/30 border border-green-200">
                        <p className="text-center mob:text-start text-sm text-green-400">No of Eligible <br /> Participants for swags</p>
                        <p className="no text-2xl border-l-2 border-l-green-700 pl-3 text-green-800">{EligibleforSwags}</p>
                    </div>
                    <div className="participationdata md:w-fit w-full h-20 p-5 space-x-5 rounded-lg flex flex-row justify-evenly mob:justify-between items-center bg-blue-50 shadow-lg shadow-blue-300/30 border border-blue-200">
                        <p className="text-center mob:text-start text-sm text-blue-400">Total No of <br />Participants</p>
                        <p className="no text-2xl border-l-2 border-l-blue-700 pl-3 text-blue-800">{data.length}</p>
                    </div>
                </div>

                <div className="search m-auto mt-3 mob:py-3 py-2  space-x-5  flex justify-start items-center shadow-lg shadow-blue-400/30 bg-blue-50 w-full rounded-full">
                    <div className="icon px-3 "><svg xmlns="http://www.w3.org/2000/svg" className='h-5'  viewBox="0 0 512 512"><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" fill="#3b82f6" /></svg></div>
                    <div className="input w-full">
                        <input
                            onChange={(e) => {
                                searchname(e.target.value)
                            }}
                            className='bg-transparent mob:text-lg text-base outline-none w-full' type="text" name="searchbar" id="searchbar" placeholder='Search Your Name Here' />
                    </div>
                </div>
            </div>

            <div className="w-full overflow-x-auto">
  <table className='table-fixed mx-auto'>
    <thead className='shadow-md text-sm bg-amber-500 text-gray-200 sticky top-2 z-10'>
      <tr className='text-center'>
        <td className="rounded-ss-lg w-10 p-2 border-r-2 border-r-gray-300">#</td>
        <td className="rounded-ss-lg w-72 p-2 border-r-2 border-r-gray-300">Name</td>
        <td className="mob:rounded-se-lg p-2 border-r-2 border-r-gray-300 max-w-[150px]">Completions of 3 Skill Badges</td>
        <td className="p-2 border-r-2 border-r-gray-300 max-w-[150px]">Prompt Design in Vertex AI </td>
        <td className="p-2 border-r-2 border-r-gray-300 max-w-[150px]">Develop GenAI Apps with Gemini... </td>
        <td className="rounded-se-lg p-2 max-w-[150px]">GenAI Game Completed</td>
      </tr>
    </thead>
    <TableBody
      Participationdata={Participationdata}
      setParticipationdata={setParticipationdata}
    />
  </table>
</div>




        </div>
        
    )
}

export default TableIndex
