import React, { useState, useRef, useEffect } from "react";
import {
  StyleSheet,
  SafeAreaView,
  View,
  TouchableWithoutFeedback,
  Text,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import moment from "moment";
import Swiper from "react-native-swiper/src";
import { useNavigation } from "@react-navigation/native";
import { doc, getDoc } from "firebase/firestore";
import getCurrentUserId from "./getCurrentUserId";
import { db } from "./config";

const { width } = Dimensions.get("window");

const Schedule = () => {
  const navigation = useNavigation();
  const swiper = useRef();
  const [value, setValue] = useState(new Date());
  const [week, setWeek] = useState(0);
  const [day, setDay] = useState("");
  const [time, setTime] = useState("");
  const [name, setName] = useState("");

  const weeks = React.useMemo(() => {
    const start = moment().add(week, "weeks").startOf("week");
    return [-1, 0, 1].map((adj) => {
      return Array.from({ length: 7 }).map((_, index) => {
        const date = moment(start).add(adj, "week").add(index, "day");

        return {
          weekday: date.format("ddd"),
          date: date.toDate(),
        };
      });
    });
  }, [week]);

  const fetchClassData = async () => {
    try {
      const userId = getCurrentUserId();
      const userRef = doc(db, "users", userId);
      const docSnap = await getDoc(userRef);

      if (docSnap.exists()) {
        const fetchedUserData = docSnap.data();
        const { day, name, time } = fetchedUserData;
        setDay(day);
        setName(name);
        setTime(time);
      } else {
        console.log("No profile data found for the current user.");
      }
    } catch (error) {
      console.error("Error fetching profile data from Firestore:", error);
    }
  };

  useEffect(() => {
    fetchClassData();
  }, []);

  const handleReturn = () => {
    navigation.goBack();
  };


  function getFirstWord(sentence) { //Function that will simply put a string of "Day ,Month, Numeric day, Numeric year" in array and restore first word of array (the day for example: Sun)
    // Split the sentence into an array of words
    const words = sentence.split(' ');
    
    // Return the first word (element at index 0)
    return words[0];
  }
  



  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>Your Schedule</Text>
        </View>

        <View style={styles.picker}>
          <Swiper
            index={1}
            ref={swiper}
            loop={false}
            showsPagination={false}
            onIndexChanged={(ind) => {
              if (ind === 1) {
                return;
              }
              setTimeout(() => {
                const newIndex = ind - 1;
                const newWeek = week + newIndex;
                setWeek(newWeek);
                setValue(moment(value).add(newIndex, "week").toDate());
                swiper.current.scrollTo(1, false);
              }, 100);
            }}
          >
            {weeks.map((dates, index) => (
              <View
                style={[styles.itemRow, { paddingHorizontal: 16 }]}
                key={index}
              >
                {dates.map((item, dateIndex) => {
                  const isActive =
                  value.toDateString() === item.date.toDateString(); 
                 getFirstWord(value.toDateString());
                    
                  return (
                    <TouchableWithoutFeedback
                      key={dateIndex}
                      onPress={() => setValue(item.date)}
                    >
                      <View
                        style={[
                          styles.item,
                          isActive && {
                            backgroundColor: "#111",
                            borderColor: "#111",
                          },
                        ]}
                      >
                        <Text
                          style={[
                            styles.itemWeekday,
                            isActive && { color: "#fff" },
                          ]}
                        >
                          {item.weekday}
                        </Text>
                        <Text
                          style={[
                            styles.itemDate,
                            isActive && { color: "#fff" },
                          ]}
                        >
                          {item.date.getDate()}
                        </Text>
                      </View>
                    </TouchableWithoutFeedback>
                  );
                })}
              </View>
            ))}
          </Swiper>
        </View>

        <View style={{ flex: 1, paddingHorizontal: 16, paddingVertical: 24 }}>
          <Text style={styles.subtitle}>{value.toDateString()}</Text>
          <View style={styles.placeholder}>
            
            <View style={styles.placeholderInset}>
            
            {day == getFirstWord(value.toDateString()) &&   //if the current day (for example Tue), display it during Tue in calendar 
            
              <View><Text style={styles.placeholderText}>{name} {time} </Text></View>
                 
            }
            
            { day === 'Everyday' &&  //if the current event in schedule is everyday, display it the entire week
            
          <View><Text style={styles.placeholderText}>{name} {time} </Text></View>

           }


            </View>
          </View>
        </View>

        <View style={styles.footer}>
          <TouchableOpacity onPress={handleReturn}>
            <View style={styles.btn}>
              <Text style={styles.btnText}>GO BACK</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 24,
  },
  header: {
    paddingHorizontal: 16,
  },
  title: {
    fontSize: 32,
    fontWeight: "700",
    color: "#1d1d1d",
    marginBottom: 12,
  },
  picker: {
    flex: 1,
    maxHeight: 74,
    paddingVertical: 12,
    flexDirection: "row",
    alignItems: "center",
  },
  subtitle: {
    fontSize: 17,
    fontWeight: "600",
    color: "#999999",
    marginBottom: 12,
  },
  footer: {
    marginTop: "auto",
    paddingHorizontal: 16,
  },
  item: {
    flex: 1,
    height: 50,
    marginHorizontal: 4,
    paddingVertical: 6,
    paddingHorizontal: 4,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: "#e3e3e3",
    flexDirection: "column",
    alignItems: "center",
  },
  itemRow: {
    width: width,
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-between",
    marginHorizontal: -4,
  },
  itemWeekday: {
    fontSize: 13,
    fontWeight: "500",
    color: "#737373",
    marginBottom: 4,
  },
  itemDate: {
    fontSize: 15,
    fontWeight: "600",
    color: "#111",
  },
  placeholder: {
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
    height: 400,
    marginTop: 0,
    padding: 0,
    backgroundColor: "transparent",
  },
  placeholderInset: { //Text displayed inside the Calendar (Classes)
    borderWidth: 4,
    borderColor: "#e5e7eb",
    borderStyle: "dashed",
    borderRadius: 9,
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
    padding: 20, // Adjust padding as needed
    alignItems: "center",
    justifyContent: "center",
  },

  placeholderText: { //Increase the text inside the Calendar (Classes)
    fontSize: 20, // Increase the font size
    fontWeight: "bold", // Use a bold font weight
    color: "#333", // Darken the text color for better visibility
    textAlign: "center",
  },


  btn: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderWidth: 1,
    backgroundColor: "#C06C84",
  },
  btnText: {
    fontSize: 18,
    lineHeight: 26,
    fontWeight: "600",
    color: "#fff",
  },
});

export default Schedule;
