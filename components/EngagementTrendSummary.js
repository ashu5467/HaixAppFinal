import React, { useState } from 'react';
import { StyleSheet, View, Button, Text } from 'react-native';
import Plotly from 'react-native-plotly';

const instagramTrace = {
  __id: 'instagram',
  x: [1, 2, 3, 4, 5],
  y: [100, 200, 150, 250, 300], // Replace with your Instagram followers data
  type: 'scatter',
  mode: 'lines+markers',
  name: 'Instagram',
};

const twitterTrace = {
  __id: 'twitter',
  x: [1, 2, 3, 4, 5],
  y: [50, 120, 80, 150, 200], // Replace with your Twitter followers data
  type: 'scatter',
  mode: 'lines+markers',
  name: 'Twitter',
};

const EngagementTrendSummary = () => {
  const [trace, setTrace] = useState(instagramTrace);
  const [resetKey, setResetKey] = useState(0);
  const [loading, setLoading] = useState(true);

  function swapData() {
    if (trace.__id === 'instagram') {
      setTrace(twitterTrace);
    } else {
      setTrace(instagramTrace);
    }
  }

  const update = (_, { data, layout, config }, plotly) => {
    plotly.react(data, layout, config);
  };

  function reset() {
    setLoading(true);
    setResetKey(resetKey + 1);
  }

  return (
    <View style={styles.container}>
      <View style={styles.buttonRow}>
        <Button onPress={swapData} title="Swap Data" />
      </View>
      <View style={styles.loadingRow}>
        <Text>{loading ? 'Loading' : 'Finished Loading'}</Text>
      </View>
      <View style={styles.chartRow}>
        <Plotly
          data={[trace]}
          layout={{ title: 'Social Media Followers Comparison' }}
          update={update}
          onLoad={() => setLoading(false)}
          debug
          key={resetKey}
        />
      </View>
      <View style={styles.buttonRow}>
        <Button onPress={reset} title="Force chart rerender" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonRow: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  loadingRow: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  chartRow: {
    flex: 1,
    width: '100%',
  },
  container: {
    paddingTop: 30,
    width: '100%',
    height: '100%',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default EngagementTrendSummary;
