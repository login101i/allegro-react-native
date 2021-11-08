import React, { useEffect, useState } from "react";
import { Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import WeekOcasion1 from "../assets/images/WeekOcasion1.png";
import WeekOcasion2 from "../assets/images/WeekOcasion2.png";
import BlackSpace from "../components/BlackSpace";
import Category from "../components/Category";
import ProductContainer from "../components/ProductContainer";
import RoundedCategory from "../components/RoundedCategory";
import { COLORS, dummyData, icons, images, SIZES } from "../constants";




const Start = ({ navigation }) => {
  function renderHeader() {
    return (
      <View
        style={{
          width: "100%",
          height: 80,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 15,
          marginBottom: 33,
        }}
      >
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <Text style={{ textAlign: "center", fontSize: SIZES.h2, fontWeight: 500, color: COLORS.lightGray }}>Witaj Maciej!</Text>

          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
            }}
          >
            <TouchableOpacity
              style={{
                width: 40,
                height: 35,
                tintColor: COLORS.lightGray,
                marginLeft: 25,
              }}
              onPress={() => console.log("click")}
            >
              <Image source={icons.settings} resizeMode="contain" style={{ flex: 1, tintColor: COLORS.lightGray, marginLeft: 5 }} />
            </TouchableOpacity>

            <Image
              source={icons.star}
              resizeMode="contain"
              style={{
                width: 35,
                height: 35,
                tintColor: COLORS.lightGray,
                marginLeft: 25,
              }}
            />
            <Image
              source={icons.home}
              resizeMode="contain"
              style={{
                width: 35,
                height: 35,
                tintColor: COLORS.lightGray,
                marginLeft: 25,
              }}
            />
          </View>
        </View>

        <View style={{ display: "flex", flexDirection: "row", marginTop: 10, marginBottom: 10 }}>
          {/* -----------------------*/}
          <View
            style={{
              width: 60,
              height: 30,
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "brown",
              marginRight: 10,
            }}
          >
            <Text style={{ color: COLORS.lightGray }}>4</Text>
            <Image source={icons.star} style={{ tintColor: COLORS.secondary, marginLeft: 5, width: 20, height: 20 }} />
          </View>
          {/* -----------------------*/}
          <View
            style={{
              width: 120,
              height: 30,
              display: "flex",
              flexDirection: "row",

              alignItems: "center",
              justifyContent: "center",
              backgroundColor: COLORS.primary,
              marginRight: 10,
            }}
          >
            <Text style={{ color: COLORS.lightGray }}>4</Text>
            <Image source={icons.star} style={{ tintColor: COLORS.secondary, marginLeft: 5, width: 20, height: 20 }} />
          </View>
          {/* -----------------------*/}
          <View
            style={{
              width: "auto",
              height: 30,
              display: "flex",
              flexDirection: "row",

              alignItems: "center",
              justifyContent: "center",
              backgroundColor: COLORS.lightBlue,
              marginRight: 10,
              paddingHorizontal: 4,
            }}
          >
            <Text style={{ color: COLORS.lightGray }}>3 876, 01 zł</Text>
            <Image source={icons.star} style={{ tintColor: COLORS.secondary, marginLeft: 5, width: 20, height: 20 }} />
          </View>
        </View>
      </View>
    );
  }

  function renderSearchInput() {
    return (
      <View style={styles.inputContainer}>
        <Image source={icons.star} style={{ tintColor: COLORS.secondary, marginLeft: 5, width: 20, height: 20 }} />
        <TextInput style={styles.input} placeholder="Czego szukasz?" keyboardType="numeric" />
        <View style={{ display: "flex", flexDirection: "row" }}>
          <Image source={icons.star} style={{ tintColor: COLORS.secondary, marginLeft: 10, width: 20, height: 20 }} />
          <Image source={icons.star} style={{ tintColor: COLORS.secondary, marginLeft: 10, width: 20, height: 20, marginRight: 10 }} />
        </View>
      </View>
    );
  }



  function renderCategories() {


    return (
			<>
				<ScrollView
					horizontal={true}
					showsHorizontalScrollIndicator={false}
					contentContainerStyle={styles.categoriesContainer}
				>
					{dummyData.categories.map(({icon, categoryTitle, borderColor}) => (
						<Category
							icon={icon}
							title={categoryTitle}
							borderBottomColor={borderColor}
              borderBottomWidth={6}
						/>
					))}
				
				</ScrollView>
				<Text style={styles.categoryTitle}>Kategorie</Text>
			</>
		);
  }

  function renderBanner() {
    return (
      <>
        <View style={styles.bannerContainer}>
          <Image style={styles.bannerImg} source={images.banner} />
        </View>
      </>
    );
  }

  function rendedRoudedCategories() {
    return (
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} contentContainerStyle={styles.roundedCatContainer}>
        {dummyData.categoriesData.map((category) => {
          return <RoundedCategory image={category.image} text={category.text} />;
        })}
      </ScrollView>
    );
  }

  function renderTimer() {
    const [hours, setHours] = useState("-");
    const [minutes, setMinutes] = useState("-");
    const [seconds, setSeconds] = useState("-");

    var countDownDate = new Date("November 12, 2021 08:00:00").getTime();

    const zero = "0";

    const counDownFunction = () => {
      setInterval(() => {
        var now = new Date().getTime();
        var timeleft = countDownDate - now;

        const hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeleft % (1000 * 60)) / 1000);

        setHours(hours);
        setMinutes(minutes);
        setSeconds(seconds);
      }, 1000);
    };

    useEffect(() => {
      counDownFunction();
    }, [minutes, hours]);

    return (
      <View style={styles.flexColumn}>
        <Text style={styles.textBig}>Weekendowe okazje kończą się za:</Text>

        <View style={styles.timeContainer}>
          <View style={styles.timeItem}>{hours < 10 ? zero : hours.toString().charAt(0)}</View>
          <View style={styles.timeItem}>{hours >= 10 ? hours.toString().charAt(1) : hours.toString().charAt(0)}</View>
          <View style={styles.colon}>:</View>
          <View style={styles.timeItem}> {minutes < 10 ? zero : minutes.toString().charAt(0)}</View>
          <View style={styles.timeItem}>{minutes >= 10 ? minutes.toString().charAt(1) : minutes.toString().charAt(0)}</View>
          <View style={styles.colon}>:</View>
          <View style={styles.timeItem}>{seconds < 10 ? zero : seconds.toString().charAt(0)}</View>
          <View style={styles.timeItem}>{seconds >= 10 ? seconds.toString().charAt(1) : seconds.toString().charAt(0)}</View>
        </View>
      </View>
    );
  }

  function renderWeekOcasions() {
    return (
      <>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} contentContainerStyle={styles.roundedCatContainer}>
          <ProductContainer img={WeekOcasion1} discount={33} oldPrice={144} price={99} description={"To jest produkt z górnej półki"} />
          <ProductContainer img={WeekOcasion2} discount={33} oldPrice={144} price={99} description={"To jest produkt z górnej półki"} />
          <ProductContainer img={WeekOcasion1} discount={33} oldPrice={144} price={99} description={"To jest produkt z górnej półki"} />
          <ProductContainer img={WeekOcasion2} discount={33} oldPrice={144} price={99} description={"To jest produkt z górnej półki"} />
          <ProductContainer img={WeekOcasion1} discount={33} oldPrice={144} price={99} description={"To jest produkt z górnej półki"} />
        </ScrollView>

      </>
    );
  }

  return (
    <ScrollView>
      <View style={{ display: "flex", flex: 1, paddingBottom: 130, backgroundColor: COLORS.backgroundColor, color: "white", height: "100%" }}>
        {renderHeader()}
        {renderSearchInput()}
        {renderCategories()}
        <BlackSpace />
        {renderBanner()}
        <BlackSpace />
        {rendedRoudedCategories()}
        <BlackSpace />
        {renderTimer()}
        {renderWeekOcasions()}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  shadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,

    elevation: 8,
  },
  inputContainer: {
    border: "1px solid grey",
    width: "90%",

    marginLeft: 15,
    marginRight: 15,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  input: {
    height: "100%",
    border: "none",
    padding: 6,
  },

  categoriesContainer: {
    height: 100,
  },
  categoryTitle: {
    textTransform: "uppercase",
    color: COLORS.linkColor,
    display: "flex",
    flexAlign: "center",
    justifyContent: "center",
    fontWeight: 600,
    fontSize: SIZES.body3,
    marginBottom: 7,
  },

  bannerContainer: {
    height: 120,
    width: "100%",
    backgroundColor: COLORS.black,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  bannerImg: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },

  roundedCatContainer: {
    backgroundColor: COLORS.backgroundColor,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "left",
  },
  flexRow: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  flexColumn: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },

  textBig: {
    fontSize: SIZES.h3,
    fontWeight: 500,
    color: COLORS.white,
    marginTop: 10,
  },
  timeContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
  },
  timeItem: {
    color: COLORS.allegroColor,
    fontSize: 26,
  },
  colon: {
    color: COLORS.allegroColor,
    fontSize: 26,
    margin: 5,
  },
});

export default Start;
