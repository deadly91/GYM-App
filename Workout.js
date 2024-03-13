import React from 'react';
import { View, ScrollView, Image, StyleSheet, useWindowDimensions, TouchableOpacity, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';


const Workout = () => {
  // Array of GIF URLs
  const gifs = [
    'https://media.self.com/photos/583c641ca8746f6e65a60c7e/master/w_1600%2Cc_limit/DIAMOND_PUSHUP_MOTIFIED.gif',
    'https://www.vissco.com/wp-content/uploads/animation/sub/double-knee-to-chest-stretch.gif',
    'https://sworkit.com/wp-content/uploads/2020/06/sworkit-jumping-jack.gif',
    'https://cdn.prod.openfit.com/uploads/2020/03/10162714/wide-arm-push-up.gif',
    'https://www.yogajournal.com/wp-content/uploads/2021/12/Cobra.gif?width=730',
    'https://www.vissco.com/wp-content/uploads/animation/sub/double-knee-to-chest-stretch.gif',
    'https://media1.popsugar-assets.com/files/thumbor/f2sbzQY1h1zqiGEV9Mhr1IAcFMU/fit-in/2048xorig/filters:format_auto-!!-:strip_icc-!!-/2017/03/13/796/n/1922729/19cf2a4428446429_EXAMPLE.crossjacks.gif',
    'https://i.pinimg.com/originals/18/27/be/1827be178c019b1dc6f8a8d8b4a7b0b8.gif',
    'https://i.pinimg.com/originals/f4/b0/f3/f4b0f3093fcadd64968e4c46d1767b50.gif',
    'https://i.pinimg.com/originals/cf/b5/67/cfb5677a755fe7288b608a4fec6f09a0.gif',
    'https://www.gymguider.com/wp-content/uploads/2017/10/straight-leg-raise.gif',
    'https://post.healthline.com/wp-content/uploads/2020/06/400x400_How_to_do_Zac_Efrons_Baywatch_Workout_Dumbbell_Lateral_Raise.gif',
    'https://c.tenor.com/gI-8qCUEko8AAAAC/pushup.gif',
    'https://i.pinimg.com/originals/8c/53/27/8c532774e4e1c524576bf1fb829ad895.gif',
    'https://www.vissco.com/wp-content/uploads/animation/sub/inch-worm.gif',
    'https://c.tenor.com/jqwaOmRs-7gAAAAC/tricep-kick-back-tricep.gif',
    'https://i.pinimg.com/originals/ff/cf/40/ffcf40474f0758dfedebc823f5532aa1.gif',
    'https://image.2bstronger.com/article/fitness/the-14-toughest-do-anywhere-workout-moves-56348/1006.gif',
    'https://media4.popsugar-assets.com/files/thumbor/BaWEAcCjtJEjiwf3PqJHnZ_S23A/fit-in/2048xorig/filters:format_auto-!!-:strip_icc-!!-/2016/08/10/766/n/1922729/1eae2dcf3d395379_PushUpTwist.gif',
    'https://media3.popsugar-assets.com/files/thumbor/0Xiqpo7pxrKz5CKcRl7XYrKegko/fit-in/1024x1024/filters:format_auto-!!-:strip_icc-!!-/2014/02/27/847/n/1922729/1baf9ec0f5ce4ea9_burpee.3.gif',
  ];

  const windowWidth = useWindowDimensions().width;
  const navigation = useNavigation();

  const handleGoBack = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollViewContainer}>
        {gifs.map((gif, index) => (
          <Image key={index} source={{ uri: gif }} style={[styles.gif, { width: windowWidth - 40 }]} />
        ))}
      </ScrollView>
      <TouchableOpacity style={styles.goBackButton} onPress={handleGoBack}>
        <Text style={styles.goBackButtonText}>GO BACK</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  scrollViewContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  gif: {
    width: '100%',
    height: 200,
    marginBottom: 20,
  },
  goBackButton: {
    backgroundColor: '#007aff',
    borderRadius: 8,
    paddingVertical: 12, // Adjust padding here
    paddingHorizontal: 145, // Adjust padding here
    marginBottom: 20,
  },
  goBackButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Workout;