import React, { useState, useEffect } from "react";

import { View } from "react-native";
import { Flex, Textt } from "../../../../components";
import { StyledNumber } from "./Timer.styles";

const Timer = () => {
  const [hours, setHours] = useState(<Textt>0</Textt>);
  const [minutes, setMinutes] = useState(<Textt>0</Textt>);
  const [seconds, setSeconds] = useState(<Textt>0</Textt>);

  const day=new Date().getDate()
  const month=new Date().getMonth()+1

  var countDownDate = new Date(`${month} ${day}, 2022 23:00:00`).getTime();

  const counDownFunction = () => {
    setInterval(() => {
      var now = new Date().getTime();
      var timeleft = countDownDate - now;

      const hours = Math.floor(
        (timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((timeleft % (1000 * 60)) / 1000);

      setHours(hours);
      setMinutes(minutes);
      setSeconds(seconds);
    }, 1000);
  };

  useEffect(() => {
    counDownFunction();
  }, []);

  return (
    <Flex column align>
      <Textt size={21}>Weekendowe okazje kończą się za:</Textt>
      <Flex center>
        <View>
          {hours < 10 ? (
            <StyledNumber>0</StyledNumber>
          ) : (
            <StyledNumber> {hours.toString().charAt(0)}</StyledNumber>
          )}
        </View>
        <View>
          {hours >= 10 ? (
            <StyledNumber> {hours.toString().charAt(1)}</StyledNumber>
          ) : (
            <StyledNumber> {hours.toString().charAt(0)}</StyledNumber>
          )}
        </View>

        <StyledNumber> :</StyledNumber>

        <View>
          {minutes < 10 ? (
            <StyledNumber>0</StyledNumber>
          ) : (
            <StyledNumber> {minutes.toString().charAt(0)}</StyledNumber>
          )}
        </View>
        <View>
          {minutes >= 10 ? (
            <StyledNumber> {minutes.toString().charAt(1)}</StyledNumber>
          ) : (
            <StyledNumber> {minutes.toString().charAt(0)}</StyledNumber>
          )}
        </View>
        <View>
          <StyledNumber> :</StyledNumber>
        </View>
        <View>
          {seconds < 10 ? (
            <StyledNumber>0</StyledNumber>
          ) : (
            <StyledNumber> {seconds.toString().charAt(0)}</StyledNumber>
          )}
        </View>
        <View>
          {seconds >= 10 ? (
            <StyledNumber> {seconds.toString().charAt(1)}</StyledNumber>
          ) : (
            <StyledNumber> {seconds.toString().charAt(0)}</StyledNumber>
          )}
        </View>
      </Flex>
    </Flex>
  );
};

export default Timer;
