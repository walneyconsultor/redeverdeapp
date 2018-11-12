import React from 'react';


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
        source     = { props.imageSource }
        title      = { props.imageTitle }
      />
    <CardContent text = { props.content } />
      <CardAction
        separator = {true}
        inColumn  = {false}>
        <CardButton
          onPress = {() => props.onConfirm()}
          title   = "SIM"
          color   = "green"
        />
        <CardButton
          onPress = {() => props.onClose()}
          title   = "NÃO"
          color   = "green"
        />
      </CardAction>
    </Card>

  )

}

export default MaterialCard;
