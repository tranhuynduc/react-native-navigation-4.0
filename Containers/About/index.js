import React from 'react';
import { SafeAreaView, ScrollView, View, Text, Button } from 'react-native';

const AboutScreen = ({ navigation }) => {
  return (
    <SafeAreaView>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        {global.HermesInternal == null ? null : (
          <View>
            <Text>Engine: Hermes</Text>
          </View>
        )}
        <View>
          <View>
            <Text>Debug</Text>
          </View>
          <View>
            <Text>Learn More</Text>
            <Text>Read the docs to discover what to do next:</Text>
          </View>
          <Button
            title="Go to Details... again"
            onPress={() => navigation.push('About')}
          />
          <Button
            title="Go to Home"
            onPress={() => navigation.navigate('Home')}
          />
          <Button title="Go back" onPress={() => navigation.goBack()} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default AboutScreen;
