import React, { useState, useEffect } from "react";
import { doc, getDoc } from "firebase/firestore"; // Import Firestore functions
import { db } from "./config"; // Import the db variable

const FetchProducts = ({ setProductData }) => {
    const fetchProducts = async () => {
        try {
            const ref1 = doc(db, "products", 'EOkvHRSMexKtmgz8A1so');
            const doc1 = await getDoc(ref1);
            if (doc1.exists()) {
                const userData1 = doc1.data();
                const ref2 = doc(db, "products", 'kLGDAFpBZVeAkSC4YqBW');
                const doc2 = await getDoc(ref2);
                if (doc2.exists()) {
                    const userData2 = doc2.data();
                    setProductData([userData1, userData2]); // Set product data array
                } else {
                    console.log("No product data found for the second document.");
                }
            } else {
                console.log("No product data found for the first document.");
            }
        } catch (error) {
            console.error("Error fetching profile data from Firestore:", error);
        }
    }

    useEffect(() => {
        fetchProducts();
    }, []); 

    return null; // FetchProducts component doesn't render anything
}

export default FetchProducts;