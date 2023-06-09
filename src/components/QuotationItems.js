import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'

export default function QuotationItems(props) {
  return (
    <View style={styles.mainContent}>
      <View style={styles.contextLeft}>
      <View style={styles.boxLogo}>
        <Image
          style={styles.logoBitcoin}
          source={require("../../assets/logo64px.png")}
        />
        <Text style={styles.dayPrice}>{props.data}</Text>
      </View>
      </View>
      <View style={styles.contextRight}>
        <Text style={styles.price}>{props.value}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  mainContent: {
    width: "95%",
    height: "auto",
    backgroundColor: "#000000",
    marginLeft: "3%",
    marginBottom: 15,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
  },
  contextLeft: {
    width: "36%",
    alignItems: "flex-start",
  },
  contextRight: {
    width: "60%",
    alignItems: "flex-end",
  },
  logoBitcoin: {
    width: 40,
    height: 40,
    marginLeft: 2,
  },
  boxLogo: {
    flexDirection: "row",
    alignItems: "center",
  },
  dayPrice: {
    fontSize: 16,
    paddingLeft: 2,
    color: "#FFFFFF",
    fontWeight: "bold",
  },
  price: {
    color: "#FFFFFF",
    fontWeight: "bold",
  }
})