import { Image } from "expo-image";
import { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { ShadowView } from 'react-native-inner-shadow';

export default function HomeScreen() {
    const [isCardVisible, setIsCardVisible] = useState(true);

    const toggleCardVisibility = () => {
        setIsCardVisible(prev => !prev);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>select payment mode</Text>
            <Text style={styles.subtitle}>choose your preferred payment method to make payment.</Text>

            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.paybutton}>
                    <View style={styles.innerbutton}>
                        <Text style={styles.paytext}>pay</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={styles.cardbutton}>
                    <View style={styles.innerbutton}>
                        <Text style={styles.cardtext}>card</Text>
                    </View>
                </TouchableOpacity>
            </View>

            <Text style={styles.text}>your digital debit card</Text>

            <ShadowView
                inset
                backgroundColor="black"
                shadowColor="#FFFFFF40"
                shadowOffset={{ width: 4, height: 4 }}
                shadowBlur={25}
                style={styles.cardContainer}
            >
                {isCardVisible && (
                    <>
                        <Image
                            source={require('../assets/images/logo.png')}
                            style={{ width: 48.44, height: 15.29, marginTop: 13.5, marginLeft: 19.06 }}
                        />
                        <Image
                            source={require('../assets/images/bank.png')}
                            style={{ width: 48.37, height: 21, marginTop: 8.5, marginLeft: 124, position: "absolute" }}
                        />
                        <Image
                            source={require('../assets/images/rupay.png')}
                            style={{ width: 71.01, height: 34.31, marginTop: 244.11, marginLeft: 105.06, position: "absolute" }}
                        />
                        <Image
                            source={require('../assets/images/numbers.png')}
                            style={{ width: 34.34, height: 92.92, marginTop: 76.08, marginLeft: 23.29, position: "absolute" }}
                        />
                        <Image
                            source={require('../assets/images/copy.png')}
                            style={{ width: 15, height: 16.67, marginTop: 206, marginLeft: 14, position: "absolute" }}
                        />
                        <Text style={styles.expirytext}>expiry</Text>
                        <Text style={styles.expirytext2}>01/28</Text>
                        <Text style={styles.copytext}>copy details</Text>
                        <Text style={styles.cvvtext}>cvv</Text>
                        <View style={styles.cvvview}>
                            <Image
                                source={require("../assets/images/star.png")}
                                style={{ width: 38.69, height: 10.53, alignSelf: "center" }}
                            />
                            <Image
                                source={require("../assets/images/eye.png")}
                                style={{ width: 24, height: 24, alignSelf: "center", marginLeft: 8 }}
                            />
                        </View>
                    </>
                )}
            </ShadowView>

            <View style={styles.freezview}>
                <Text style={[styles.freezetext, { color: isCardVisible ? "white" : "#A90808" }]}>{isCardVisible ? "freeze" : "unfreeze"}</Text>
                <TouchableOpacity
                    style={[
                        styles.freezbutton,
                        { backgroundColor: isCardVisible ? "#888888" : "#A90808" },
                    ]}
                    onPress={toggleCardVisibility}
                >
                    <View style={styles.innerfreezbutton}>
                        <Image
                            source={
                                isCardVisible
                                    ? require('../assets/images/freeze.png')
                                    : require('../assets/images/unfreeze.png')
                            }
                            style={{ width: 20, height: 20, alignSelf: "center" }}
                        />
                    </View>
                </TouchableOpacity>
            </View>


            <View style={styles.bottomContainer}>
                <Image
                    source={require('../assets/images/Rectangle.png')}
                    style={{ width: 360, height: 32, opacity: .8 }}
                />
                <View style={styles.rightContainer}>

                    <View style={{ flexDirection: "column", alignItems: "center", alignSelf: "center" }}>
                        <TouchableOpacity style={styles.geniebutton}>
                            <View style={styles.innergeniebutton}>
                                <Image
                                    source={require('../assets/images/home.png')}
                                    style={{ width: 20, height: 20, alignSelf: "center", opacity: .3, justifyContent: "center" }}
                                />
                            </View>
                        </TouchableOpacity>
                        <Text style={styles.bottomContainertext2}>home</Text>
                    </View>

                    <View style={{ flexDirection: "column", alignItems: "center", alignSelf: "center" }}>
                        <TouchableOpacity style={styles.qrcodebutton}>
                            <View style={styles.innerqrcodebutton}>
                                <Image
                                    source={require('../assets/images/qrcode.png')}
                                    style={{ width: 20, height: 20, alignSelf: "center" }}
                                />
                            </View>
                        </TouchableOpacity>
                        <Text style={styles.bottomContainertext}>yolo pay</Text>
                    </View>

                    <View style={{ flexDirection: "column", alignItems: "center", alignSelf: "center" }}>
                        <TouchableOpacity style={styles.geniebutton}>
                            <View style={styles.innergeniebutton}>
                                <Image
                                    source={require('../assets/images/genielogo.png')}
                                    style={{ width: 20, height: 20, alignSelf: "center", opacity: .3, justifyContent: "center" }}
                                />
                            </View>
                        </TouchableOpacity>
                        <Text style={styles.bottomContainertext2}>genie</Text>
                    </View>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "black",
    },
    title: {
        fontSize: 24,
        fontFamily: "Poppins-SemiBold",
        color: "white",
        fontWeight: "600",
        marginTop: 64,
        position: "absolute",
        marginLeft: 16
    },
    subtitle: {
        fontSize: 14,
        fontWeight: "400",
        color: "white",
        marginLeft: 16,
        marginTop: 116,
        position: "absolute",
        fontFamily: "Poppins-Regular",
        opacity: .5
    },
    buttonContainer: {
        flexDirection: "row",
        gap: 8,
        width: 328,
        marginLeft: 16,
        marginTop: 182,
        position: "absolute"
    },
    paybutton: {
        width: 96,
        height: 40,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "white",
        borderRadius: 40,
        borderWidth: 1,
        padding: 8,
    },
    innerbutton: {
        width: 94,
        height: 36,
        top: .77,
        justifyContent: "center",
        borderRadius: 40,
        backgroundColor: "black"
    },
    paytext: {
        fontSize: 16,
        color: "white",
        fontFamily: "Poppins-Regular",
        fontWeight: "400",
        textAlign: "center"
    },
    cardtext: {
        fontSize: 16,
        color: "#A90808",
        fontFamily: "Poppins-Regular",
        fontWeight: "400",
        textAlign: "center"
    },
    cardbutton: {
        width: 96,
        height: 40,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#A90808",
        borderRadius: 40,
        borderWidth: 1,
        padding: 8,
    },
    cardContainer: {
        width: 186,
        height: 296,
        marginTop: 304,
        position: "absolute",
        marginLeft: 16,
        borderRadius: 16,
    },
    text: {
        fontSize: 12,
        color: "white",
        fontFamily: "Poppins-Medium",
        fontWeight: "500",
        opacity: .2,
        textTransform: "uppercase",
        marginTop: 270,
        position: "absolute",
        marginLeft: 16
    },
    bottomContainer: {
        width: "100%",
        height: 140,
        bottom: 0,
        alignItems: "center",
        position: "absolute",
    },
    expirytext: {
        fontSize: 10,
        color: "white",
        fontFamily: "Poppins-Regular",
        fontWeight: "400",
        textAlign: "center",
        marginLeft: 110,
        top: 72,
        opacity: .5,
        position: "absolute",
    },
    expirytext2: {
        fontSize: 14,
        color: "white",
        fontFamily: "Poppins-Regular",
        fontWeight: "400",
        textAlign: "center",
        marginLeft: 110,
        marginTop: 83,
        position: "absolute",
    },
    copytext: {
        fontSize: 12,
        color: "#A90808",
        fontFamily: "Poppins-Medium",
        fontWeight: "500",
        marginLeft: 39,
        marginTop: 206,
        position: "absolute",
        textAlign: "center",
    },
    freezview: {
        width: 130,
        height: 296,
        marginTop: 304,
        position: "absolute",
        marginLeft: 214,
        justifyContent: "center",
    },
    freezbutton: {
        width: 58,
        height: 58,
        alignItems: "center",
        backgroundColor: "#888888",
        borderRadius: 50,
    },
    innerfreezbutton: {
        width: 57,
        height: 57,
        marginTop: 1,
        marginLeft: .5,
        justifyContent: "center",
        alignSelf: "center",
        backgroundColor: "black",
        borderRadius: 50,
    },
    freezetext: {
        fontSize: 12,
        fontFamily: "Poppins-Medium",
        fontWeight: "500",
        textAlign: "center",
        marginLeft: 11,
        marginTop: 105,
        position: "absolute",
    },
    qrcodebutton: {
        width: 58,
        height: 58,
        alignSelf: "center",
        backgroundColor: "#888888",
        borderRadius: 50,
    },
    innerqrcodebutton: {
        width: 57,
        height: 57,
        marginTop: 1,
        marginLeft: .5,
        justifyContent: "center",
        alignSelf: "center",
        backgroundColor: "black",
        borderRadius: 50,
    },
    bottomContainertext: {
        fontSize: 12,
        color: "white",
        fontFamily: "Poppins-Medium",
        fontWeight: "500",
        marginTop: 5,
    },
    bottomContainertext2: {
        fontSize: 12,
        color: "white",
        alignSelf: "center",
        fontFamily: "Poppins-Medium",
        fontWeight: "500",
        opacity: .3,
        marginTop: 5,
    },
    cvvtext: {
        fontSize: 10,
        color: "white",
        fontFamily: "Poppins-Regular",
        fontWeight: "400",
        textAlign: "center",
        marginLeft: 50,
        marginTop: 110,
    },
    cvvview: {
        flexDirection: "row",
        justifyContent: "center",
        marginLeft: 100
    },
    rightContainer: {
        flexDirection: "row",
        gap: 50
    },
    geniebutton: {
        width: 41,
        height: 41,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 50,
        borderWidth: 1,
        borderColor: "gray",
    },
    innergeniebutton: {
        width: 40,
        height: 40,
        marginTop: 1,
        marginLeft: .5,
        justifyContent: "center",
        alignSelf: "center",
        backgroundColor: "black",
        borderRadius: 50,
    }
});
