import React, { useContext } from 'react';
import { Button, Input } from 'react-native-elements';
import { Context as LocationContext } from "../context/LocationContext";
import useSaveTrack from '../hooks/useSaveTrack';
import Spacer from './Spacer';

const TrackForm = () => {
    const { state: { name, recording, locations }, 
        startRecording, 
        stopRecording, 
        changeName 
    } = useContext(LocationContext);

    const [saveTrack] = useSaveTrack();

    return (
        <>
            <Input value={name} placeholder="Enter Track Name" onChangeText={changeName} />
            <Spacer>
                {recording 
                    ? <Button title="Stop" onPress={stopRecording}/>
                    : <Button title="Start Recording" onPress={startRecording} />
                }
            </Spacer>
            {
                !recording && locations.length
                ? <Spacer><Button title="Save Recording" onPress={saveTrack}/></Spacer>
                : null
            }    
        </>
    );
};

export default TrackForm;


