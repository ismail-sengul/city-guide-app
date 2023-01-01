const initialState = {
    attractions : [
        {
            id: 1,
            position: {
                lat :38.41888,
                lng :27.12871
            },
            name: "İzmir Clock Tower",
            desc: "Kâmil Pasha, the then-Governor of Aidin Vilayet, held a meeting with the prominent people of İzmir on 1 August 1900. It was decided a clock tower to be built in commemoration of the 25th anniversary of Abdul Hamid II's accession to the throne. The clock tower was designed by the Levantine French architect Raymond Charles Péré.",
            draggable: false
          },
          {
            id: 2,
            position: {
                lat :37.9421,
                lng :27.3396,
            },
            name : "Ephesus Ancient City",
            desc: "Ephesus was recipient city of one of the Pauline epistles; one of the seven churches of Asia addressed in the Book of Revelation; the Gospel of John may have been written there; and it was the site of several 5th-century Christian Councils (see Council of Ephesus). The city was destroyed by the Goths in 263. Although it was afterwards rebuilt, its importance as a commercial centre declined as the harbour was slowly silted up by the Küçükmenderes River. In 614, it was partially destroyed by an earthquake. Today, the ruins of Ephesus are a favourite international and local tourist attraction, being accessible from Adnan Menderes Airport and from the resort town Kuşadası. In 2015, the ruins were designated a UNESCO World Heritage Site.",
            draggable: false
          },
          {
            id : 3,
            position: {
                lat : 38.4357,
                lng :27.14048,
            },
            name : "Ataturk Museum",
            desc: "Izmir Atatürk Museum was built between 1875-1880 by an Armenian carpet merchant, Takfor Spartalian, in 1. Kordon ( Atatürk Boulevard ), Gündoğdu Square, Alsancak, İzmir. This structure was built as a house, but was abandoned by its owner, after which it was nationalized. For a while, the Turkish Army used the building as its headquarters and Atatürk stayed and carried out his private studies in this building. The Treasury leased it to Naim Bey to be used as a hotel and the hotel was named as Naim Palas. Atatürk and İsmet İnönü stayed in this hotel. İzmir Municipality purchased the building and gave as a gift to Atatürk. After Atatürk's death, the municipality transformed the building into a museum. Today, the building is used as a museum exhibiting the writings of Atatürk and his personal effects." ,
            draggable: false
          },
          {
            id: 4,
            position: {
                lat :38.40876,
                lng :27.11748,
            },
            name : "Historical Elevator Building",
            desc: "Asansör (Turkish for 'elevator', derived from the French word ascenseur) is a historical building in İzmir's Karataş quarter, within the boundaries of the metropolitan district of Konak. It was built in 1907 as a work of public service by a wealthy Jewish banker and trader of that period, Nesim Levi Bayraklıoğlu, in order to ease passage from the narrow coastline of Karataş to the hillside, the elevator within the building serving to carry people and goods through the steep cliff between the two parts of the quarter.",
            draggable: false
          },
          {
            id : 5,
            position: {
                lat :38.428,
                lng :27.1454,
            },
            name : "Kültürpark",
            desc: "Kültürpark is an urban park in İzmir, Turkey. It is located in the district of Konak, roughly bounded by Dr. Mustafa Enver Bey Avenue on the north, 1395th Street, 1396th Street and Bozkurt Avenue on the east, Mürsel Paşa Boulevard on the south, and Dr. Refik Saydam and Şair Eşref boulevards on the west. Kültürpark was founded in 1936 on an area of 360,000 m2 (3,900,000 sq ft), which was ruined by the great fire of Smyrna. Since then, it has been hosting the İzmir International Fair. In 1939, the park has expanded to 420,000 m2 (4,500,000 sq ft)." ,
            draggable: false
          },
          {
            id : 6,
            position: {
                lat :38.43191,
                lng :27.13696,
            },
            name : "Arkas Art Center",
            desc: "Located in Kordon and used by the Honorary Consulate of France, the part of the building facing Gulf of İzmir was transferred to Arkas Holding in 2010 for twenty years. The restored building was opened on 19 November 2011 as Arkas Art Center. Arkas Art Center exhibits various other works with the Arkas Collection, which was created by Lucien Arkas, the Chairman of Arkas Holding, and contains more than nine hundred works. From September 2019 to January 2020, Pablo Picasso's works will be exhibited at the Arkas Art Center as part of the Picasso-Méditerranée project." ,
            draggable: false
          },
          {
            id : 7,
            position: {
                lat :38.4139,
                lng :27.12807,
            },
            name : "Archaeological Museum",
            desc: "The museum was established in 1924. It was built on the site of an abandoned church, called Saint Voukolos Church. The museum opened to the public in 1927. The archaeology museum was later moved to the National Education Pavilion in the Culture Park, which in turn was converted into a museum in 1951. But archaeological work in Izmir, Smyrna, and the neighboring ancient cities necessitated a larger museum. A new museum was subsequently established in 1984. The museum has exhibits from ancient sites like Bayraklı (ancient Smyrna), Ephesus, Pergamon, Miletus, Aphrodisias, Clazomenae, Teos, and Iasos. Two gardens, one in the front and one in the back, portray the history of western Anatolia." ,
            draggable: false
          },
          {
            id : 8,
            position: {
                lat :37.95235,
                lng :27.43069,
            },
            name : "Şirince Village",
            desc: "Şirince, formerly Kirkince or Çirkince, is a village nestled on the hills in Central Aegean Region, Turkey. It is a small village which is famous for its wine and houses. Sirince was a Greek village before the Greco-Turkish War. In 1923, Turkish and Greek governments exchanged populations. The Turkish government exiled Christian Greeks of Turkey to Greece, while Greek government exiled the Muslim Turks of Greece to Turkey. Şirince forms the setting of Greek writer Dido Sotiriou's—a native of Şirince—Farewell Anatolia, in which the events around the Greco-Turkish War of 1919–1922 are depicted through the eyes of a fictional character from Şirince." ,
            draggable: false
          },
          {
            id: 9,
                position: {
                    lat :38.20158,
                    lng :27.34881,
                },
                name : "Key Car Museum",
                desc: "The museum was established in May 6 2015 with the automobile collection that Ozgorkey family have. It is one of the widest automobile museums in the country. The museum is set in 7,000 square meters and exhibits different collections that come from Turkey and all around the world." ,
                draggable: false
      },
      {
                id: 10,
                position: {
                    lat :38.4135,
                    lng :27.12676,
                },
                name : "Ümran Baradan Game and Toys Museum",
                desc: "This museum is the first example of the boutique museology concept initiated by Konak Municipality. The foundations of the museum were laid in 2004 by our world-famous ceramic artist Ümran Baradan. The toys that the artist has seen and admired in various countries of the world are exhibited here. In addition, a collection was created with the works of talented children who won degrees in competitions organized by Ümran Baradan." ,
                draggable: false
      },
      
       
      
      {
            id: 11,
                position: {
                    lat :39.16688,
                    lng :26.89683,
                },
                name : "Waterfall of Lovers",
                desc: "Waterfall of Lovers (Nebiler Waterfall)located in the western province of İzmir has been declared as a “sensitive area to be strictly protected,” with a presidential decree announced in the official gazette. The waterwall attracts the attention of visitors with its unique vegetation, caves and rivers while there are also three different waterfalls and caves in the 1,300 square meter area." ,
                draggable: false
      },
      
      
      ,
      {
            id: 12,
                position: {
                    lat :38.5159,
                    lng :27.22128,
                },
                name : "Homeros Valley",
                desc: "Great place for a Homer pilgrimage. A steep climb of about 20 meters to a path that skits a hillside and offers access to 3 caves. There aren't any markings in the caves themselves, and there is a plaque down at the bottom that mentions other literary pilgrims, such as Byron who came here." ,
                draggable: false
      },
      
      
      
      {
            id: 13,
                position: {
                    lat :38.47354, 
                    lng :27.07433,
                },
                name : "Mavibahçe Shopping Center",
                desc: "MaviBahçe is a shopping mall located in Karşıyaka district of İzmir province. Here puts into service on November 14, 2015. EGS Park is located between Mavişehir Shopping Mall and Hilltown Karşıyaka. MaviBahçe has the largest children's stores, playground and the first IMAX cinema in İzmir.",
                draggable: false
      },
      
       
      {
            id: 14,
                position: {
                    lat :38.308, 
                    lng :26.3719,
                },
                name : "Ilıca Beach",
                desc: "Ilıca is a large resort area near Çeşme in the extreme western tip of Turkey, in İzmir Province. A township apart in practically all its aspects, Ilıca administratively depends the municipality of the district center of Çeşme, at a distance of 5 km to the west. Ilıca also has a fine beach, about 1.5 km long, as well as favorable wind conditions which make Ilıca, together with the neighboring Alaçatı, an internationally prized location for windsurfing. A unique feature of Ilıca Beach is its shallow and warm waters allowing swimmers to wade up to 100 meters out to sea." ,
                draggable: false
      },
      
      {
            id: 15,
                position: {
                    lat :38.46769, 
                    lng :27.20957,
                },
                name : "Aşık Veysel Recreation Area",
                desc: "Aşık Veysel Recreation Area was put into service in 2010 by Izmir Metropolitan Municipality. The area was built on 231 decares of land. In the area, there are three basketball courts, two tennis courts, one mini football field, a 1.500 square meter artificial pond, a cafeteria for 200 people, three children's playgrounds, 1.5 kilometers of bicycle path, walking paths and outdoor sports equipment track." ,
                draggable: false
      },
      
      {
            id: 16,
                position: {
                    lat : 38.45319,
                    lng :27.09744,
                },
                name : "Bostanlı Sunset Lounge",
                desc: "'Bostanlı Sunset Lounge', which lays on one of the few coastal fragments facing directly west in Karşıyaka, is a set of cascading thermo-wood covered platforms which form an inviting urban surface, streching between the artificial slope covered with trees and the embankment itself. The simplicity and fluence in the surface geometry, encourage the user to experience a more direct relationship with the setting sun and the sea.",
                draggable: false
      },
      
      {
            id: 17,
                position: {
                    lat : 38.27024,
                    lng :26.25988,
                },
                name : "Atakum Beach",
                desc: "Atakum is the favourite destination of the tourists in summer days with its 10 blue flagged beaches, pubs and entertainment facilities nearby the shore. You may use dressing cabins and toilets 'free of charge' that are located on every 500 m at the beaches. Moreover, you may visit malls, cinemas, parks and piers through the beach as well. If you would like to spend your vacation by sunbathing or enjoying the facilities nearby the shore, Atakum is the tailor-cut destination for you.",
                draggable: false
      },
      
      
      
      {
            id: 18,
                position: {
                    lat : 38.73612,
                    lng :26.78026,
                },
                name : "Sazlıca Beach",
                desc: "Sazlıca Beach, located in Foça district, has a very special nature. Because it is an inner bay, the sea is calm and the beach is sandy. There is also a diving center in the bay. It is an ideal beach for tent, caravan, barbecue and picnic lovers.",
                draggable: false
      },
      
      
      
      {
            id: 19,
                position: {
                    lat : 38.38129,
                    lng :27.03456,
                },
                name : "Balçova Therapy Forest",
                desc: "Balçova Therapy Forest is a completely secluded escape point hidden in the outskirts of Izmir, the perfect address for a walk, enjoy the fresh air and relax, here you will be able to enter the Balçova thermal springs, and enjoy a journey of healing and relaxation together in the heart of nature, and if you are patient and strong, you will be able to reach the view of the dam and the bay at the highest point of this forest and overlook one of the most beautiful views of the city.",
                draggable: false
      },
      
      
      {
            id: 20,
                position: {
                    lat : 38.41378,
                    lng :27.14496,
                },
                name : "Kadifekale",
                desc: "Kadifekale (literally 'the velvet castle' in Turkish) is a hilltop castle in İzmir, Turkey. The castle is located on the Mount Pagos which has an elevation of 186 metres. It was built in the 3rd century BC. The castle is located at a distance of about 2 km from the shoreline and commands a general view of a large part of the city of İzmir, as well as of the Gulf of İzmir. In 2007, the metropolitan municipality of İzmir started renovation and restoration works in Kadifekale. In 2020, Kadifekale became a Tentative World Heritage Site as part of The Historical Port City of Izmir." ,
                draggable: false
      },
      
      
      
      {
            id: 21,
                position: {
                    lat : 38.40944,
                    lng :27.06143,
                },
                name : "İnciraltı Urban Forest",
                desc: "Inciraltı City Forest, which is the first urban forest of Izmir, is located in Yenikale Cape, where nature and the sea meet. Inciraltı City Forest offers its visitors the opportunity to enjoy sports, sightseeing and picnics. There are resting areas, bridges, walking and cycling paths in the forest. In the City Forest, Inciraltı Disabled Education, Culture and Art Center Garden also provides service.There are seating and playgroups in an area of ​​7,000 square meters aimed at the use of disabled individuals." ,
                draggable: false
      },
      
      
      
      {
            id: 22,
                position: {
                    lat : 38.46560,
                    lng :27.21993,
                },
                name : "Santa Maria Catholic Church",
                desc: "The church on Halit Ziya Boulevard is the Italian Catholic Church and Franciscan priests serve there. While the outer facades of the building are quite modest, the main entrance facade in the east has a careful workmanship. This facade was divided into two floors with transverse graded moldings and ended with a triangular pediment. he church has a single-nave basilica plan that extends in the east-west direction. On the east side is a three-part narthex, divided by two piers, and on the west side is the bema platform covered by a dome with an eight-segment and center lantern.",
                draggable: false
      },
      
      {
            id: 23,
                position: {
                    lat : 37.91153,
                    lng : 27.33403,
                },
                name : "House of the Virgin Mary",
                desc: "The House of the Virgin Mary is a Catholic shrine located on Mt. Koressos n the vicinity of Ephesus, 7 kilometres (4.3 mi) from Selçuk in Turkey. The house was discovered in the 19th century by following the descriptions in the reported visions of Blessed Anne Catherine Emmerich (1774–1824), a Roman Catholic nun and visionary, which were published as a book by Clemens Brentano after her death. While the Catholic Church has never pronounced in favour or against the authenticity of the house, the site has nevertheless received a steady flow of pilgrimage since its discovery. Anne Catherine Emmerich was beatified by Pope John Paul II on October 3, 2004." , 
                draggable: false
      },
       
      {
            id: 24,
                position: {
                    lat :38.38881,
                    lng : 27.03463,
                },
                name : "Aqua Fantasy Park",
                desc: "Aqua Fantasy Hotel and outstanding Water Park located at Izmir’s famous Ephesus Beach. Aqua Fantay’s guests are just miles away from some of the worlds most historical places such as the legendary city of Ephesus, Virgin Mary’s House, Artemis Temple and Şirince Village. Aqua Fantasy is just 5 km (3 miles) from Ephesus, 8 km (5 miles) to the famous holiday town of Kusadası, 8 km (5 miles) to the city of Selcuk and 55 km (34 miles) to Izmir International Airport.Whether preferring lively water activities and fun slides, Aqua Fantasy is the perfect retreat for water lovers. The quiet surroundings, comfortable accommodation, wonderful views and great beachfront location make this a perfect family escape.",
                draggable: false
      },
      
      {
            id: 25,
                position: {
                    lat : 38.19449,
                    lng : 26.78447,
                },
                name : "Sığacık Castle",
                desc: "Sığacık Castle is located in the Seferihisar district of İzmir. It was built during the Seljuk period and rebuilt with marble blocks brought from the Ancient City of Teos, upon the suggestion of Piri Reis, and by order of Suleiman the Magnificent, who was preparing for the Rhodes Campaign, and took its current form. Today, it is a stage for theater and concert performances and a farmer's market on Sundays. Kaleiçi The castle of Sığacık is one of the few castles where daily life continues." ,
                draggable: false
      },
      {
        id: 26,
        position : {
            lat : 38.46438,
            lng : 27.21334
        },
        name : "Peterson Pavillon",
        desc : "In the Paterson Mansion, which is located on a very large land, different architectural styles are used together. The two-storey mass, which can be described as the main structure and meets the building approaches, is surrounded by a two-storey mass of similar character from the west, and a three-storey mass in the east, in which the tower and a single-storey chapel (family church) are located. While a Western expression was observed in the main mass and west wing of the building, the eastern wing was shaped by the local architectural style. While the main structure and western wing consisted of ostentatious spaces for guests, the eastern wing served the private living spaces and service spaces of the family.",
        draggable : false
      },
      {
        id: 27,
        position : {
            lat : 38.46355,
            lng : 27.21996
        },
        name : "Arkas Marine Historical Center",
        desc : "Arkas Maritime History Center, located in Bornova, Izmir, was opened in 2012 in its historical building dating back to the 1800’s, to showcase maritime history and developments in maritime industry through a selection from the Arkas Collection. The selection comprises ship models, paintings and nautical objects which have been collected for over 30 years.",
        draggable : false
      },
      {
        id: 28,
        position : {
            lat : 38.46254,
            lng : 27.21864
        },
        name : "Ege University Paper And Book Arts Museum",
        desc : "Ege University Paper and Book Arts Museum presents the journey of paper and book, indispensable fixtures of the last 2000 years of world cultural history, with examples from different cultures. Addressing students of all education levels with its information and visuals, the museum, besides being the first in Turkey, has a unique position in the international arena as a university museum where the subject is handled in this dimension and richness. Paper and Book Arts Museum was opened at Ege University on 12 December 2012. In the museum, which also includes an art gallery, nearly 1000 objects were brought together with donations from individuals, institutions and artists.",
        draggable : false
      },

    ]
}

const attractionReducer = (state = initialState,action) => {
    return state;
}

export default attractionReducer;