import React, { useState, useContext } from "react";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import * as Yup from "yup";
import { COLORS } from "../../constants";
import { Flex, LogoLoader, Textt } from "../../components";
import { AppForm, SubmitButton, AppFormField } from "../../components/forms";
import { AuthenticationContext } from "../../services/authentication/AuthenticationContext";

const RegisterScreen = () => {
  const [isLoading, setIsLoading] = useState(false);
  const navigation = useNavigation();

  const validationSchema = Yup.object().shape({
    name: Yup.string().required().label("Name"),
    email: Yup.string().required().label("Email"),
    password: Yup.string().min(5).required().label("Password")
  });

  const { state } = useContext(AuthenticationContext);

  const handleRegisterUser = async (values) => {
    try {
      setIsLoading(true);
      const { data } = await axios.post(
        `http://localhost:8000/api/register`,
        values
      );
      setIsLoading(false);
      navigation.navigate("Login");
    } catch (err) {
      console.log(err);
    }
  };

  if (state.user) {
    navigation.navigate("Start");
  }

  if (isLoading) {
    return (
      <Flex align center flexOne>
        <LogoLoader
          source={{
            uri: "https://maciejewski.com/wp-content/uploads/allegro.png"
          }}
          style={{
            width: "200px",
            height: "200px"
          }}
        />
      </Flex>
    );
  }
  return (
    <Flex column align center flexOne>
      <Textt tile="Allegro" />

      <Flex center column align width="70%">
        <AppForm
          validationSchema={validationSchema}
          initialValues={{ name: "", email: "", password: "" }}
          onSubmit={(values) => handleRegisterUser(values)}
        >
          <Textt> Name</Textt>
          <AppFormField name="name" autoCapitalize="none" autoCorrect={false} />
          <Textt> Email</Textt>

          <AppFormField
            name="email"
            autoCapitalize="none"
            autoCorrect={false}
            keyboardType="email-address"
            TexttContentType="emailAddress"
          />

          <Textt>Haslo</Textt>
          <AppFormField
            name="password"
            secureTexttEntry
            autoCapitalize="none"
            TexttContentType="password"
          />

          <Textt>Powtórz hasło</Textt>
          <AppFormField
            name="password"
            secureTexttEntry
            autoCapitalize="none"
            TexttContentType="password"
          />
          <SubmitButton
            title="zarejestruj się"
            buttonColor={COLORS.backgroundColorFaded}
            smallLetters="uppercase"
          />
        </AppForm>

        <Flex space>
          <Textt title="mam juz konto" color={COLORS.linkColor} />
        </Flex>

        <Textt align wrap>
          Rejestrując się do Allego akceptujesz Regulamin w aktualnym brzmieniu
          obowiązująym od dnia 25 paź 2021. Informacje o planowanych oraz
          archiwalnych zmianach Regulaminu są dostępne na stronie.
        </Textt>
      </Flex>
    </Flex>
  );
};

export default RegisterScreen;
