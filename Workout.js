import React, { useState } from 'react';
import { View, ScrollView, Image, StyleSheet, useWindowDimensions, TouchableOpacity, Text} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Workout = () => {
  
  // State to manage the selected category
  const [selectedCategory, setSelectedCategory] = useState(null);

  // Array of workout categories and their corresponding GIF URLs
  const workouts = [
    { 
      category: 'Chest Workout', 
      gifs: [
        'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/workouts/2017/10/widegrippushup-1508248881.gif',
        'https://goodlife-content-hub.azureedge.net/d/e/8/b/7/d/de8b7deda02d7d0e48d6ee98f069827ebbb63791.gif',
        'https://goodlife-content-hub.azureedge.net/9/b/b/8/e/4/9bb8e472fda0375984ea7934946324a4fb614685.gif',
        'https://goodlife-content-hub.azureedge.net/7/3/0/0/e/7/7300e7034b964e5277ecf26bde08a7aafed71426.gif', 
        'https://goodlife-content-hub.azureedge.net/b/5/b/2/3/6/b5b2367eed6cb671fc196541ed7b0912d0b8b285.gif', 
      ] 
    },
    { 
      category: 'Back training', 
      gifs: [
        'https://goodlife-content-hub.azureedge.net/5/5/6/3/0/9/55630977e973d557a4de23c7210b3e36f1de80ea.gif',
        'https://goodlife-content-hub.azureedge.net/e/3/7/7/7/d/e3777d5f398dd0695dcf5d0bbd2336e2dcac92da.gif',
        'https://goodlife-content-hub.azureedge.net/e/5/3/c/c/d/e53ccdfba3c1e17f056c84e7f7fbeb9c2ea1a56f.gif',
        'https://goodlife-content-hub.azureedge.net/b/a/c/8/d/2/bac8d2fa9643a1b7346267d5e6afa1c789c3e704.gif',
        'https://goodlife-content-hub.azureedge.net/e/5/f/3/9/2/e5f39288a3d304d82b1f3220c743d80e4e70d9ce.gif',
      ] 
    },
    { 
      category: 'Hands training', 
      gifs: [
        'https://goodlife-content-hub.azureedge.net/d/5/b/b/8/c/d5bb8c902b622c447904d2f410c7586df10ca566.gif',
        'https://goodlife-content-hub.azureedge.net/9/5/7/f/2/6/957f262e5d8b4c3512f8825aec0205db41baae3f.gif',
        'https://goodlife-content-hub.azureedge.net/9/e/c/a/3/b/9eca3bd8abd6004d8773628d40579146f65a9a55.gif',
        'https://blog.goodlifefitness.com/media/4144/beginnerdumbbellchestbackandarms_lyingtricepextension_dumbbell_male.gif?quality=100',
        'https://blog.goodlifefitness.com/media/4143/beginnerdumbbellchestbackandarms_hammercurl_dumbbell_female.gif?quality=100',
      ] 
    },
    { 
      category: 'Shoulder training', 
      gifs: [
        'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjLfr7c_VHeXbjxxnlJ-h6FX2VabGQBB7XmfYSM8CxnvM3Ua30ZrpNKLcNp6Mm9xBcVsM8h7sa2nYgqFK7GpIyTpSG70wkt8-PFAEC3Pu236HVWVRBR71Rk4356Zk0H2YEvX7ecL3BUjreR/s1600/shoulder+workout+(2).gif',
        'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgoTh5h9j5FEVaorv1wPKkJOIzJGK8ynbvb6sDYsfgeAtyIBuTDlAcEjvyDJPaeztfmXSHJfoe8TJ88otBjKVt9YykBhJj227NA8-zY51cdHpSKV2eo-WjGWosn3iPtLBEg5cBmeOzijIyo/s320/shoulder+workout+(5).gif',
        'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjaSqpDRkBrzyRoe4-FI_NiEvIzrN7IYoSLZvqPRL9yrIOh_Nct4ImUZD-ax0XfFtlJT_kZSnippU-ToXg-Wdw8-9h9U52dpT8XzIO9HfXQtkwayMl93TS_n4ivv595BbfqgkVMsf3YcmcP/s320/shoulder+workout+(4).gif',
        'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEje_JdbSLzVrFGk3-MqSL46jGfAUUtayocp2ALTtBY8qF4KAG1qAQpP62T74IYvBK0weEhouioOuNFgnbh5ub58SfEmLgY3FUGtzjRQAs7wAJjGbbwVHYwj6Kc12HHJx4itZm5Er4lRSrmw/s320/shoulder+workout+(3).gif',
        'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEginDGlE04e8Nr9fhT-y5qUtG0fLXoqJbxaaSYv9NvMoXUB0eRd_NimuFYiQsHUTODYwm9GgHsn4Q1nGuO8EPWQpXaMsJjL9CU8jdGlrh341p2SC4l-M3VoS7yrFIh10zB_lkuO02ShTege/s320/shoulder+workout+(9).gif',
        'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjbNxg_jti5vCMXxztZX-u5pZifULHgzApux6HhgK9VoXSuKcbXvWMEmTS3EVofcXofJLLSh4nVgh90GbdhH_bGAcCZiRfLBWNiKGWdoD-8yav_wvJJv4Nyx2a16bEo6CQGtA78G5QAk5di/s320/shoulder+workout+(10).gif',
      ] 
    },
    { 
      category: 'Leg training', 
      gifs: [
        'https://goodlife-content-hub.azureedge.net/6/0/2/b/8/7/602b870cc4cf0c29f5be2f62569ec7dcfd08bec3.gif',
        'https://goodlife-content-hub.azureedge.net/f/e/8/8/8/4/fe88844ca75be8ae7ee5412ac83d433afa0e5940.gif',
        'https://goodlife-content-hub.azureedge.net/f/c/d/6/a/c/fcd6acf98284c9aca8f8d4fb30129c0292414fa8.gif',
        'https://goodlife-content-hub.azureedge.net/9/1/e/d/9/a/91ed9a1260518c48f08ef62c033d9040ab7ac883.gif',
        'https://goodlife-content-hub.azureedge.net/f/4/0/f/5/1/f40f51ca7e77cac4751f1844d519d80d9e46b671.gif',
        'https://goodlife-content-hub.azureedge.net/9/5/0/4/0/b/95040b00e559c135f0334ccb8190944de4eafc0c.gif',
      ] 
    },
    { 
      category: 'Abdominal training', 
      gifs: [
        'https://goodlife-content-hub.azureedge.net/0/8/8/c/c/9/088cc9747edaffff102aecd5281fd6d00980d2f9.gif',
        'https://goodlife-content-hub.azureedge.net/5/2/e/e/6/2/52ee62dc6415ed9cda5153cc794fb68b620bcecc.gif',
        'https://goodlife-content-hub.azureedge.net/5/f/f/f/2/1/5fff21bf3bb23e62e783f5d5f55e9cfb6f6aea01.gif',
        'https://goodlife-content-hub.azureedge.net/6/d/d/6/2/9/6dd6299a58e36eb6ed9f9c5662baa99b36ee5f99.gif',
        'https://blog.goodlifefitness.com/media/3882/rollingsideplanks_female.gif?quality=100',
      ] 
    },
    { 
      category: 'Booty training', 
      gifs: [
        'https://goodlife-content-hub.azureedge.net/9/1/3/5/f/7/9135f73549b6894a3059ae781d0b0b20984b9188.gif',
        'https://goodlife-content-hub.azureedge.net/9/4/e/6/6/e/94e66e56fe416c5771ee8299ce14ca2274796d27.gif',
        'https://goodlife-content-hub.azureedge.net/0/0/f/b/7/1/00fb71185d8f4eb10a76c1bb801be34327cfc2ab.gif',
        'https://goodlife-content-hub.azureedge.net/7/5/4/a/f/7/754af7877d4d14d4472dd14cc96612b512746039.gif',
        'https://goodlife-content-hub.azureedge.net/d/e/f/f/9/b/deff9b2ad360bc7bece6d4f30a811a8886f4ef80.gif',
        'https://goodlife-content-hub.azureedge.net/a/f/b/c/1/d/afbc1dfa81c1ef597c9fe132cf3f20eaa3332db0.gif',   
      ] 
    },
  ];

  const windowWidth = useWindowDimensions().width;
  const navigation = useNavigation();

  const handleSelectCategory = (category) => {
    setSelectedCategory(category === selectedCategory ? null : category);
  };

  const handleGoBack = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollViewContainer}>
        {workouts.map((workout, index) => (
          <View key={index}>
            <TouchableOpacity style={styles.button} onPress={() => handleSelectCategory(workout.category)}>
              <Text style={styles.buttonText}>{workout.category}</Text>
            </TouchableOpacity>
            {selectedCategory === workout.category && workout.gifs.map((gif, gifIndex) => (
              <Image key={gifIndex} source={{ uri: gif }} style={[styles.gif, { width: windowWidth - 40 }]} />
            ))}
          </View>
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
    backgroundColor: '#355C7D',
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
    backgroundColor: '#C06C84',
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
  button: {
    width: 350, // Adjust the width as needed
    paddingVertical: 12,
    paddingHorizontal: 20, // Reduced padding
    marginBottom: 20,
    backgroundColor: '#F8B195', // A vibrant blue color
    borderRadius: 25,
    alignItems: 'center',
    marginVertical: 10,
  },  
  buttonText: {
   color: '#FFFFFF', // White text color for contrast
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Workout;