import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppDataService {

  districtList = [
    {
      id:1,
      name:"Thiruvanthapuram"
    },
    {
      id:2,
      name:"Kollam"
    },
    {
      id:3,
      name:"Pathanamthitta"
    },
    {
      id:4,
      name:"Alapuzha"
    },
    {
      id:5,
      name:"Kottayam"
    },
    {
      id:6,
      name:"Idukki"
    },
    {
      id:7,
      name:"Ernakulam"
    },
    {
      id:8,
      name:"Thrissur"
    },
    {
      id:9,
      name:"Palakkad"
    },
    {
      id:10,
      name:"Malappuram"
    },
    {
      id:11,
      name:"Kozhikode"
    },
    {
      id:12,
      name:"Wayanad"
    },
    {
      id:13,
      name:"Kannur"
    },
    {
      id:14,
      name:"Kasargod"
    }
  ];

  talukList = [
    {
      id:1,
      districtId:1,
      name:"Neyyattinkara"
    },
    {
      id:2,
      districtId:1,
      name:"Kattakkada"
    },
    {
      id:3,
      districtId:1,
      name:"Nedumangadu"
    },
    {
      id:4,
      districtId:1,
      name:"Thiruvananthapuram"
    },
    {
      id:5,
      districtId:1,
      name:"Chirayinkeezhu"
    },
    {
      id:6,
      districtId:1,
      name:"Varkala"
    },
    {
      id:7,
      districtId:2,
      name:"Kollam"
    },
    {
      id:8,
      districtId:2,
      name:"Kunnathoor"
    },
    {
      id:9,
      districtId:2,
      name:"Karunagappally"
    },
    {
      id:10,
      districtId:2,
      name:"Kottarakkara"
    },
    {
      id:11,
      districtId:2,
      name:"Punalur"
    },
    {
      id:12,
      districtId:2,
      name:"Pathanapuram"
    },
    {
      id:13,
      districtId:3,
      name:"Adoor"
    },
    {
      id:14,
      districtId:3,
      name:"Konni"
    },
    {
      id:15,
      districtId:3,
      name:"Kozhencherry"
    },
    {
      id:16,
      districtId:3,
      name:"Ranni"
    },
    {
      id:17,
      districtId:3,
      name:"Mallappally"
    },
    {
      id:18,
      districtId:3,
      name:"Thiruvalla"
    },
    {
      id:19,
      districtId:4,
      name:"Chenganoor"
    },
    {
      id:20,
      districtId:4,
      name:"Mavelikkara"
    },
    {
      id:21,
      districtId:4,
      name:"Karthikappally"
    },
    {
      id:22,
      districtId:4,
      name:"Kuttanad"
    },
    {
      id:23,
      districtId:4,
      name:"Ambalapuzha"
    },
    {
      id:24,
      districtId:4,
      name:"Cherthala"
    },
    {
      id:25,
      districtId:5,
      name:"Changanassery"
    },
    {
      id:26,
      districtId:5,
      name:"Kottayam"
    },
    {
      id:27,
      districtId:5,
      name:"Vaikom"
    },
    {
      id:28,
      districtId:5,
      name:"Meenachil"
    },
    {
      id:29,
      districtId:5,
      name:"Kanjirappally"
    },
    {
      id:30,
      districtId:6,
      name:"Peermade"
    },
    {
      id:31,
      districtId:6,
      name:"Udumbanchola"
    },
    {
      id:32,
      districtId:6,
      name:"Idukki"
    },
    {
      id:33,
      districtId:6,
      name:"Thodupuzha"
    },
    {
      id:34,
      districtId:6,
      name:"Devikulam"
    },
    {
      id:35,
      districtId:7,
      name:"Kothamangalam"
    },
    {
      id:36,
      districtId:7,
      name:"Muvattupuzha"
    },
    {
      id:37,
      districtId:7,
      name:"Kunnathunad"
    },
    {
      id:38,
      districtId:7,
      name:"Kanayannur"
    },
    {
      id:39,
      districtId:7,
      name:"Kochi"
    },
    {
      id:40,
      districtId:7,
      name:"North Paravur"
    },
    {
      id:41,
      districtId:7,
      name:"Aluva"
    },
    {
      id:42,
      districtId:8,
      name:"Chalakudy"
    },
    {
      id:43,
      districtId:8,
      name:"Mukundapuram"
    },
    {
      id:44,
      districtId:8,
      name:"Kodungallur"
    },
    {
      id:45,
      districtId:8,
      name:"Thrissur"
    },
    {
      id:46,
      districtId:8,
      name:"Chavakad"
    },
    {
      id:47,
      districtId:8,
      name:"Kunnamkulam"
    },
    {
      id:48,
      districtId:8,
      name:"Thalapilly"
    },
    {
      id:49,
      districtId:9,
      name:"Alathoor"
    },
    {
      id:50,
      districtId:9,
      name:"Chittur"
    },
    {
      id:51,
      districtId:9,
      name:"Palakkad"
    },
    {
      id:52,
      districtId:9,
      name:"Pattambi"
    },
    {
      id:53,
      districtId:9,
      name:"Ottapalam"
    },
    {
      id:54,
      districtId:9,
      name:"Mannarkkad"
    },
    {
      id:55,
      districtId:10,
      name:"Perinthalmanna"
    },
    {
      id:56,
      districtId:10,
      name:"Nilambur"
    },
    {
      id:57,
      districtId:10,
      name:"Eranad"
    },
    {
      id:58,
      districtId:10,
      name:"Kondotti"
    },
    {
      id:59,
      districtId:10,
      name:"Ponnani"
    },
    {
      id:60,
      districtId:10,
      name:"Tirur"
    },
    {
      id:61,
      districtId:10,
      name:"Tirurangadi"
    },
    {
      id:62,
      districtId:11,
      name:"Kozhikode"
    },
    {
      id:63,
      districtId:11,
      name:"Thamarassery"
    },
    {
      id:64,
      districtId:11,
      name:"Koyilandi"
    },
    {
      id:65,
      districtId:11,
      name:"Vatakara"
    },
    {
      id:66,
      districtId:12,
      name:"Vythiri"
    },
    {
      id:67,
      districtId:12,
      name:"Sulthan Bathery"
    },
    {
      id:68,
      districtId:12,
      name:"Mananthavady"
    },
    {
      id:69,
      districtId:13,
      name:"Thalassery"
    },
    {
      id:70,
      districtId:13,
      name:"Iritty"
    },
    {
      id:71,
      districtId:13,
      name:"Kannur"
    },
    {
      id:72,
      districtId:13,
      name:"Taliparamba"
    },
    {
      id:74,
      districtId:14,
      name:"Hosdurg"
    },
    {
      id:75,
      districtId:14,
      name:"Vellarikundu"
    },
    {
      id:76,
      districtId:14,
      name:"Kasargod"
    },
    {
      id:77,
      districtId:14,
      name:"Manjeswaram"
    }
  ];

  educationalQualificationList = [
    {
      id: 1,
      value: 'Post Graduate'
    },
    {
      id: 2,
      value: 'Graduate'
    },
    {
      id: 3,
      value: 'Diploma'
    },
    {
      id: 4,
      value: 'Higher Secondary'
    },
    {
      id: 5,
      value: 'SSLC'
    },
    {
      id: 6,
      value: 'Others'
    }
  ];

  ReligionList = [
    {
      id: 1,
      value: 'Hindu'
    },
    {
      id: 2,
      value: 'Muslim'
    },
    {
      id: 3,
      value: 'Christian'
    },
    {
      id: 4,
      value: 'Sikh'
    },
    {
      id: 5,
      value: 'Jain'
    },
    {
      id: 6,
      value: 'Others'
    }
  ];
}
