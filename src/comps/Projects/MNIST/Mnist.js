import React, {useEffect} from 'react';
import * as tf from '@tensorflow/tfjs';

export default function Mnist() {
    useEffect(() => {
        async function loadModel() {
            const loadedModel = await tf.loadLayersModel('model.js');

            // Print the model summary
            loadedModel.summary();

            // Perform predictions or any other actions with the loaded model here
        }

        loadModel();
    }, []);

    return <div>Hello</div>;
}
