import React from 'react';

import Banner from '../assets/img/ecologia-e1459743249819.jpg';

import {
  Card,
  CardTitle,
  CardContent,
  CardAction,
  CardButton,
  CardImage
} from 'react-native-material-cards';

const MaterialCard = props => {

  return (
    <Card isDark={false} style={{ maxHeight: 420 }}>
      <CardImage
        resizeMode = "cover"
        source     = { Banner }
        title      = "Você já possui uma conta?"
      />
       <CardContent text = "Caso já possua uma conta, clique em 'SIM' para poder logar." />
      <CardAction
        separator = {true}
        inColumn  = {false}>
        <CardButton
          onPress = {() => {}}
          title   = "SIM"
          color   = "green"
        />
        <CardButton
          onPress = {() => props.onCloseModal()}
          title   = "NÃO"
          color   ="green"
        />
      </CardAction>
    </Card>

  )

}

export default MaterialCard;
