import '../_mockLocations';
import React, { useContext, useCallback } from 'react';
import { withNavigationFocus } from 'react-navigation';
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Text } from 'react-native-elements';
import Map from '../components/Map';
import { Context as LocationContext } from "../context/LocationContext";
import useLocation from '../hooks/useLocation';
import TrackForm from '../components/TrackForm';
import Spacer from '../components/Spacer';




const TrackCreateScreen = ({ isFocused }) => {
  const { state: { recording }, addLocation } = useContext(LocationContext);
  const callback = useCallback(
    location => {
      addLocation(location, recording);
    }, 
    [recording]
  );
  const [err] = useLocation(isFocused || recording, callback);

  
  return (
    <SafeAreaView forceInset={{ top: 'always' }}>
      <Text h2>Create a Track</Text>
      <Map/>
      {err ? <Text>Please Enable location services</Text> : null}
      <Spacer>
        <TrackForm/>
      </Spacer>
    </SafeAreaView>
  );
};


const styles = StyleSheet.create({});

export default withNavigationFocus(TrackCreateScreen);
