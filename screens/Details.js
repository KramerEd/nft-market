import React from "react";
import {Text, View, SafeAreaView, Image, StatusBar, FlatList,} from "react-native";
import {COLORS, SIZES, SHADOWS, FONTS, assets} from "../constants";
import {CircleButton, RectButton, SubInfo, FocusedStatusBar, DetailsDesc, DetailsBid, People} from "../components";

const DetailsHeader = ({data, navigation}) => {
    return (
        <View style={{width: "100%", height: 373}}>
            <Image source={data.image} resizeMode="cover" style={{width: "100%", height: "100%"}}/>
            <CircleButton imgUrl={assets.left} handlePress={() => navigation.goBack()} left={15}
                          top={StatusBar.currentHeight + 10}/>
            <CircleButton imgUrl={assets.heart} right={15}
                          top={StatusBar.currentHeight + 10}/>
        </View>

    )

}


const Details = ({route, navigation}) => {
    const {data} = route.params
    return (
        <SafeAreaView style={{flex: 1, backgroundColor: "#fff"}}>
            <FocusedStatusBar barStyle="dark" backgroundColor="transparent" transLucent={true}/>
            <View style={{
                width: "100%",
                position: "absolute",
                bottom: 10,
                paddingVertical: SIZES.font,
                justifyContent: "center",
                alignItems: "center",

                zIndex: 1
            }}>
                <RectButton minWidth={180} fontSize={SIZES.medium} {...SHADOWS.dark} />
            </View>

            <FlatList
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{paddingBottom: SIZES.extraLarge * 3}}
                data={data.bids}
                renderItem={({item}) => <DetailsBid bid={item}/>}
                keyExtractor={(item => {
                    item.id
                })}
                ListHeaderComponent={() => (
                    <>
                        <DetailsHeader data={data} navigation={navigation}/>
                        <SubInfo/>
                        <View style={{padding: SIZES.font}}>
                            <DetailsDesc data={data}/>

                            {data.bids.length > 0 && (
                                <Text style={{fontSize: SIZES.font, fontFamily: FONTS.semiBold, color: COLORS.primary}}>Current
                                    Bid</Text>
                            )}
                        </View>
                    </>
                )}
            />
        </SafeAreaView>
    )
}
export default Details