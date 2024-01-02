import React from 'react';
import {categories} from './categories';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {StyleSheet, ScrollView, Text, View, Image} from 'react-native';

const DoctorCollection = () => {
  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      <ScrollView
        style={{maxHeight: '30%'}}
        horizontal
        scrollEnabled
        contentContainerStyle={styles.scrollView}>
        <View style={[styles.container, {backgroundColor: '#4579fe89'}]}>
          <Text style={styles.nameText}>DR. Sara Thomso</Text>
          <Text style={styles.CatagoriesText}>Cardiology</Text>
          <Text style={styles.CatagoriesText}>Doctor</Text>
          <View style={styles.icon}>
            <AntDesign name="star" color="#f4bf50" />
            <Text>4.7</Text>
          </View>
        </View>
        <View style={styles.container}>
          <Text style={styles.nameText}>Dr. Eric Snow</Text>
          <Text style={styles.CatagoriesText}>Pulmonolgy</Text>
          <Text style={styles.CatagoriesText}>Doctor</Text>
          <View style={styles.icon}>
            <AntDesign name="star" color="#f4bf50" />
            <Text>4.6</Text>
          </View>
        </View>
        <View style={[styles.container, {backgroundColor: '#4579fe89'}]}>
          <Text style={styles.nameText}>DR. Safa Ektow</Text>
          <Text style={styles.CatagoriesText}>Rheumatologist</Text>
          <Text style={styles.CatagoriesText}>Doctor</Text>
          <View style={styles.icon}>
            <AntDesign name="star" color="#f4bf50" />
            <Text>4.5</Text>
          </View>
        </View>
      </ScrollView>
      <View style={styles.categoryView}>
        <Text style={styles.title}>Category</Text>
        <Text style={styles.viewAllText}>View All</Text>
      </View>

      <ScrollView
        horizontal
        style={{maxHeight: 150}}
        contentContainerStyle={{flexGrow: 1}}>
        {categories.map(item => {
          return (
            <View
              key={item.id}
              style={[styles.categoryBox, {backgroundColor: item.color}]}>
              <Image source={item.icon} />
              <Text style={{fontSize: 16, color: '#23AAFA'}} numberOfLines={1}>
                {item.name}
              </Text>
            </View>
          );
        })}
      </ScrollView>

      <View style={{flex: 1, backgroundColor: '#ECECEC'}}>
        <View style={styles.categoryView}>
          <Text style={styles.title}>Top Rated Doctors</Text>
          <Text style={styles.viewAllText}>View All</Text>
        </View>
        <ScrollView>
          <View style={styles.doctorCard}>
            <View style={[styles.dummyImage, {backgroundColor: '#FCF1D6'}]} />
            <View style={styles.doctorDetail}>
              <View>
                <Text style={styles.doctorName}>Dr. Justin Sprint</Text>
                <Text style={styles.doctorCategory}>Ophthalmologist</Text>
              </View>
              <Text>16 Reviews (4.6)</Text>
            </View>
          </View>

          <View style={styles.doctorCard}>
            <View style={[styles.dummyImage, {backgroundColor: '#D2E6FF'}]} />
            <View style={styles.doctorDetail}>
              <View>
                <Text style={styles.doctorName}>Dr. Russell Sprout</Text>
                <Text style={styles.doctorCategory}>Virologist</Text>
              </View>
              <Text>19 Reviews (4.5)</Text>
            </View>
          </View>

          <View style={styles.doctorCard}>
            <View style={[styles.dummyImage, {backgroundColor: '#FCF1D6'}]} />
            <View style={styles.doctorDetail}>
              <View>
                <Text style={styles.doctorName}>Dr. Throiw Qiest</Text>
                <Text style={styles.doctorCategory}>Orthopedic</Text>
              </View>
              <Text>26 Reviews (4.3)</Text>
            </View>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default DoctorCollection;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginVertical: 10,
    marginHorizontal: 10,
    backgroundColor: '#f9d8d9',
    borderRadius: 15,
    width: 300,
  },
  titleContainer: {
    paddingVertical: 20,
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 20,
    color: 'black',
    fontWeight: '700',
  },
  scrollView: {
    flexDirection: 'row',
    flexGrow: 1,
  },

  nameText: {
    fontSize: 18,
    color: '#000000',
  },
  CatagoriesText: {
    fontSize: 14,
    color: '#878e98',
  },
  icon: {
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: 15,
  },
  categoryView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    marginVertical: 20,
    alignItems: 'center',
  },
  categoryBox: {
    width: 120,
    height: 120,
    borderRadius: 15,
    padding: 15,
    justifyContent: 'space-between',
    marginVertical: 10,
    marginHorizontal: 12,
  },
  viewAllText: {fontSize: 16, color: '#000', fontWeight: '500'},
  doctorCard: {
    backgroundColor: '#fff',
    borderRadius: 12,
    height: 120,
    marginHorizontal: 10,
    paddingHorizontal: 20,
    paddingVertical: 15,
    flexDirection: 'row',
    marginVertical: 10,
  },
  dummyImage: {
    width: 90,
    height: 90,
    borderRadius: 12,
  },
  doctorCategory: {
    color: '#23AAFA',
    fontWeight: '500',
    fontSize: 16,
    marginTop: 5,
  },
  doctorDetail: {
    flex: 1,
    marginHorizontal: 10,
    justifyContent: 'space-between',
  },
  doctorName: {fontWeight: '600', fontSize: 16, color: '#000'},
});
