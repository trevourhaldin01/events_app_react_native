import { Camera, CameraType } from 'expo-camera';
import { useState, useEffect } from 'react';
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const QrCodeScreen = ()=>{
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    alert(`Bar code with type ${type} and data ${data} has been scanned!`);

    if (data) {
      //use navigation to navigate to event detail page
    }
  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission!</Text> ;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={{ flex: 1 }}>
      <Camera
        style={{ flex: 1 }}
        type={Camera.Constants.Type.back}
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
      />
      {scanned && (
        <TouchableOpacity onPress={() => setScanned(false)} style={{ backgroundColor: 'white', padding: 15 }}>
          <Text>Tap to Scan Again</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};
  



const styles = StyleSheet.create({
    screen: {
        padding:20
    }
})

export default QrCodeScreen;