require('dotenv').config()

const PouchDB = require('pouchdb')
const db = new PouchDB(process.env.COUCHDB_URL + process.env.COUCHDB_NAME)

db
  .bulkDocs([
//BASIC NEEDS ASSISTANCE
    {
        "_id": "resource_va_homeless_prevention_program_and_walk_in_clinic",
        "type": "resource",
        "organization": "general",
        "categoryId": "category_basic-needs-assistance",
        "name": "VA",
        "formalName": "VA Homeless Prevention Program & Walk-In Clinic",
        "shortDesc": "re-housing assistance and medical care",
        "purpose": "The Ralph H. Johnson Veterans Affairs Medical Center offers a walk-in clinic for veterans searching for re-housing assistance and means to prevent homelessness. In addition to referral services, the walk-in clinic offers basic outpatient medical care.",
        "website": "http://www.charleston.va.gov/services/homeless/index.asp",
        "contacts": [{
            "name": "Linda Williams",
            "office": "Ralph H. Johnson Veterans Affairs Medical Center",
            "title": null,
            "phone": "843-577-5011",
            "email": null,
            "isPrimary": true
        }],
        "addresses": [{
            "location": "Ralph H. Johnson Veterans Affairs Medical Center",
            "street": "109 Bee Street",
            "city": "Charleston",
            "state": "SC",
            "zip": "29401",
            "isPrimary": true
        }],
        "rank": null,
        "faq": [{
            "question": null,
            "answer": null
        }]
    },
    {
        "_id": "resource_airman_and_family_readiness_center_transition_assistance_program",
        "type": "resource",
        "organization": "community resource",
        "categoryId": "category_basic-needs-assistance",
        "name": "TAP",
        "formalName": "Airman & Family Readiness Center-Transition Assistance Program (TAP)",
        "shortDesc": "pre-separation transition counseling",
        "purpose": "The Airman & Family Readiness Center assists all Reserves, Active Duty, National Guard, retired veterans and civilian employees regardless of branch. The Transition Assistance Program (TAP) assists those associated specifically with the United States Air Force and prepares separating, retiring, and demobilizing service members and their families with skills and knowledge to facilitate a successful transition from life in the military to the civilian sector. The first step in the transition process is to complete the congressionally-mandated pre-separation counseling session, which provides detailed information on the various benefits and services available to separating members. Each Family Readiness Center is staffed to provide personalized assistance for all transition-related needs of armed services members.",
        "website": "http://www.jbcharleston.com/youth-and-family/air-base/airman-a-family-readiness",
        "contacts": [{
            "name": null,
            "office": "Airman & Family Readiness Center",
            "title": null,
            "phone": "843-963-7231",
            "email": null,
            "isPrimary": true
        }],
        "addresses": [{
            "location": "Airman & Family Readiness Center",
            "street": "104 E. Simpson Street, Building 500",
            "city": "Joint Base Charleston",
            "state": "SC",
            "zip": "29404",
            "isPrimary": true
        }],
        "rank": null,
        "faq": [{
            "question": null,
            "answer": null
        }]
    },
    {
        "_id": "resource_american_red_cross_of_the_lowcountry_sc",
        "type": "resource",
        "organization": "community resource",
        "categoryId": "category_basic-needs-assistance",
        "name": "Red Cross",
        "formalName": "American Red Cross of the Lowcountry - SC",
        "shortDesc": "emergency communication and transition services",
        "purpose": "The American Red Cross provides emergency communication services to military (active duty, National Guard, Reserves, retired, and veterans) and their families, helping them locate and send messages to their loved ones across the globe. When service members return home, they have access to several programs and American Red Cross volunteers who are ready and willing to ease the transition from deployment or discharge into the civilian sector. Programs provided include, but are not limited to, emergency financial assistance referrals, disaster preparedness and response, reconnection and family mental health education, resiliency training to cope with the challenges of life in the military, and supportive transitional services for wounded soldiers and their family members. We also offer volunteer opportunities in all lines of service.To initiate an Emergency Communication Message, call 1-877-272-7337 when you need to contact a service member in the event of a family emergency. This service is available 365 days a year, 24 hours a day."
        "website": "http://www.redcross.org/what-we-do/support-military-families",
        "contacts": [{
            "name": "Jeanne Carmichael",
            "office": "American Red Cross of the Lowcountry - SC",
            "title": "Manager, Service to the Armed Forces",
            "phone": "843-764-2323",
            "email": "Jeanne.Carmichael@redcross.org",
            "isPrimary": true
        }],
        "addresses": [{
            "location": "American Red Cross of the Lowcountry - SC",
            "street": "2424 City Hall Lane, Suite A",
            "city": "North Charleston",
            "state": "SC",
            "zip": "29406",
            "isPrimary": true
        }],
        "rank": null,
        "faq": [{
            "question": null,
            "answer": null
        }]
    },
    {
        "_id": "resource_association_of_the_u.s._army,_charleston,_sc_sub-chapter_
        of_the_columbia_sc_chapter",
        "type": "resource",
        "organization": "community resource",
        "categoryId": "category_basic-needs-assistance",
        "name": "AUSA",
        "formalName": "Association of the U.S. Army (AUSA), Charleston, SC Sub-Chapter of the Columbia SC Chapter",
        "shortDesc": "post-transition employment services",
        "purpose": "AUSA is a not-for-profit, professional, education organization devoted to helping troops, veterans, their families, and all of our armed services communities in the Low Country, SC. AUSA’s Charleston Sub-Chapter (of the Palmetto – Fort Jackson SC Chapter) helps troops and vets write resumes and cover letters, learn to network and interview effectively, follow up after interviews, and helps find suitable employment. The AUSA Charleston Sub-Chapter also adopts Army (Regular, Reserve, and National Guard) units to help identify short-term housing, ships supplies and comfort items to troops overseas, helps industries find reliable employees, hosts social events for troops and their families, distributes helpful publications for parents and spouses, and adopts the widows and widowers of troops killed in the war on terror."
        "website": "www.ausa.org",
        "contacts": [{
            "name": "LTC W. Larry Dandridge (Retired)",
            "office": "Association of the U.S. Army (AUSA), Charleston, SC Sub-Chapter of the Columbia SC Chapter",
            "title": "AUSA Charleston SC Chapter VP for Veterans Affairs",
            "phone": "843-276-7164",
            "email": "LDandridge@earthlink.net",
            "isPrimary": true
        }],
        "addresses": [{
            "location": "Association of the U.S. Army (AUSA), Charleston, SC Sub-Chapter of the Columbia SC Chapter",
            "street": "236 North Ainsdale Drive",
            "city": "North Charleston",
            "state": "SC",
            "zip": "29414",
            "isPrimary": true
        }],
        "rank": null,
        "faq": [{
            "question": null,
            "answer": null
        }]
    },
    {
        "_id": "resource_one80_place",
        "type": "resource",
        "organization": "community resource",
        "categoryId": "category_basic-needs-assistance",
        "name": "One80 Place",
        "formalName": "One80 Place",
        "shortDesc": "homeless services",
        "purpose": "One80 Place is the largest homeless service provider in South Carolina, serving a hot meal daily in the Charleston-area homeless shelter and the Palmetto House shelter in Summerville, SC. One80 Place staff are certified to oversee comprehensive case management for all clients, including military veterans, civilians, individuals and families."
        "website": "www.one80place.org",
        "contacts": [{
            "name": "Selena Wilson",
            "office": "One80 Place",
            "title": "Chief Program Officer",
            "phone": [{
              "mainLine": "843-723-9477",
              "Supportive Services for Veterans & Families (SSVF) Hotline": "843-212-8668"
              }],
            "email": "swilson@one80place.org",
            "isPrimary": true
        }],
        "addresses": [{
            "location": "One80 Place",
            "street": "35 Walnut Street",
            "city": "Charleston",
            "state": "SC",
            "zip": "29403",
            "isPrimary": true
        }],
        "rank": null,
        "faq": [{
            "question": null,
            "answer": null
        }]
    },
    {
        "_id": "resource_church_mobilization_hub_of_charleston",
        "type": "resource",
        "organization": "community resource",
        "categoryId": "category_basic-needs-assistance",
        "name": "The Hub",
        "formalName": "Church Mobilization Hub of Charleston",
        "shortDesc": "church revitalization",
        "purpose": "The Hub is a team of ministry and marketplace partners who work to help vitalize and revitalize churches in the Charleston area through a relational process of formation and mobilization that leads to Gospel saturation, and city-wide church collaboration."
        "website": "www.thehubcharleston.com",
        "contacts": [{
            "name": "Craig Tuck",
            "office": "Church Mobilization Hub of Charleston",
            "title": "Strategic Development",
            "phone": "843-345-6370",
            "email": "craig@thehubcharleston.com",
            "isPrimary": true
        }],
        "addresses": [{
            "location": "Church Mobilization Hub of Charleston",
            "street": null,
            "city": null,
            "state": null,
            "zip": null,
            "isPrimary": true
        }],
        "rank": null,
        "faq": [{
            "question": null,
            "answer": null
        }]
    },
    {
        "_id": "resource_origin_sc",
        "type": "resource",
        "organization": "community resource",
        "categoryId": "category_basic-needs-assistance",
        "name": "Origin SC",
        "formalName": "Origin SC (formerly known as Family Services, Inc.)",
        "shortDesc": "financial counseling",
        "purpose": "Origin SC has existed since 1888, bringing hope and quality customer service to the Charleston community and beyond. Our goal is to empower individuals and families to achieve financial independence and sustainability at a cost comparable to industry standards.  Services include:  Bankruptcy Counseling, Behavioral Health Services, VA Conservatorship Program, Consumer Credit Counseling, Foreclosure Prevention, Home Purchase Programs, Homeless Prevention/Supportive Services, Homeless Prevention/Supportive Services, Homeownership Resource Center, Representative Payee Program, Supportive Services for Veterans & Families, Supportive Services for Veterans & Families"
        "website": "www.originsc.org",
        "contacts": [{
            "name": null,
            "office": null,
            "title": null,
            "phone": null,
            "email": "dgeer@originsc.org",
            "isPrimary": true
        }],
        "addresses": [{
            "location": "Origin SC",
            "street": "4925 Lacross Road",
            "city": "North Charleston",
            "state": "SC",
            "zip": "29406",
            "isPrimary": true
        }],
        "rank": null,
        "faq": [{
            "question": null,
            "answer": null
        }]
    },
    {
        "_id": "resource_fleet_and_family_support_center",
        "type": "resource",
        "organization": "community resource",
        "categoryId": "category_basic-needs-assistance",
        "name": "FFSC",
        "formalName": "Fleet & Family Support Center",
        "shortDesc": "transition-related services",
        "purpose": "The Fleet and Family Support Center (FFSC), Naval Weapons Station is the military community's primary resource for information and services. We are recognized by commands in the area as vital to the success of their mission. We serve with pride and distinction and are renowned for our superb performance. The Fleet and Family support Center assists all Reserves, Active Duty, National Guard, retired veterans and civilian employees regardless of service branch. The Transition Assistance Program (TAP) assists and prepares members separating, retiring, or demobilizing service members and their families with skills and knowledge to facilitate a successful transition from life in the military to the civilian sector. Each Family Readiness Center is staffed to provide personalized assistance for all transition-related needs of armed services members."
        "website": "http://www.jbcharleston.com/youth-and-family/weapons-stations/fleet-a-family-support",
        "contacts": [{
            "name": null,
            "office": null,
            "title": null,
            "phone": null,
            "email": null,
            "isPrimary": true
        }],
        "addresses": [{
            "location": "Fleet & Family Support Center",
            "street": "1005 Jefferson Avenue., Building 755",
            "city": "Goose Creek",
            "state": "SC",
            "zip": "29445",
            "isPrimary": true
        }],
        "rank": null,
        "faq": [{
            "question": null,
            "answer": null
        }]
    },
    {
        "_id": "resource_goodwill_industries_of_lower_south_carolina",
        "type": "resource",
        "organization": "community resource",
        "categoryId": "category_basic-needs-assistance",
        "name": "Goodwill",
        "formalName": "Goodwill Industries of Lower South Carolina",
        "shortDesc": "employment training",
        "purpose": "The Palmetto Goodwill mission is to help people “achieve their full potential through the dignity and power of work.” This mission is achieved through employment training and job placement in 18 counties across South Carolina, helping recent graduates of work training programs face the challenges of preparing for the work force and maintaining steady employment to improve financial stability and well-being. Palmetto Goodwill staff offer assistance in career coaching, vocational assessment, skills training and job placement, case management, and training."
        "website": "www.palmettogoodwill.org",
        "contacts": [{
            "name": "Manish Mazyck",
            "office": "Palmetto Goodwill",
            "title": "Veteran Employment Specialist",
            "phone": "843-556-0072",
            "email": "mmazyck@palmettogoodwill.org",
            "isPrimary": true
        }],
        "addresses": [{
            "location": "Palmetto Goodwill",
            "street": "2150 Eagle Drive., Building 100",
            "city": "North Charleston",
            "state": "SC",
            "zip": "29406",
            "isPrimary": true
        }],
        "rank": null,
        "faq": [{
            "question": null,
            "answer": null
        }]
    },
    {
        "_id": "resource_my_sister's_house,_inc.",
        "type": "resource",
        "organization": "community resource",
        "categoryId": "category_basic-needs-assistance",
        "name": "My Sister's House",
        "formalName": "My Sister’s House, Inc.",
        "shortDesc": "emergency shelter for women and children",
        "purpose": "My Sister's House provides a safe-haven for women and children looking to escape the cycle of domestic violence and other forms of abuse. An emergency shelter is available 24 hours per day with 36 beds for women and children throughout Berkeley, Charleston, and Dorchester counties."
        "website": "http://mysistershouse.org/",
        "contacts": [{
            "name": null,
            "office": null,
            "title": null,
            "phone": [{
                "phone1": "843-767-4069",
                "phone2": "843-744-3242",
                "24-hour crisis hotline": "800-273-HOPE"
              }],
            "email": "hope@mysistershouse.com",
            "isPrimary": true
        }],
        "addresses": [{
            "location": null,
            "street": null,
            "city": null,
            "state": null,
            "zip": null,
            "isPrimary": true
        }],
        "rank": null,
        "faq": [{
            "question": null,
            "answer": null
        }]
    },
    {
        "_id": "resource_navy-marine_corps_relief_society",
        "type": "resource",
        "organization": "community resource",
        "categoryId": "category_basic-needs-assistance",
        "name": "NMCRS",
        "formalName": "Navy-Marine Corps Relief Society",
        "shortDesc": "interest free loans and grants for emergency and medical expenses",
        "purpose": "Potential clients must have an active military ID. The NMCRS is unable to assist non-military civilians. Agency provides military assistance to military personnel, their immediate family members who have ID, and military 20 (or more) year retirees. Interest-free loans, grants or a combination of the two may provide:  Emergency transportation, Food, Funeral Expenses, Medical/Dental Needs, Rental & utility bill assistance, Eligibility for NMCRS services covers Sailors, Marines, and Army currently on active duty and their immediate families ONLY. Retirees with 20 or more years of active military service and widows of eligible service members and retirees also may qualify."
        "website": "http://www.nmcrs.org/",
        "contacts": [{
            "name": null,
            "office": null,
            "title": null,
            "phone": "843-794-7662",
            "email": null,
            "isPrimary": true
        }],
        "addresses": [{
            "location": "Navel Weapons Station",
            "street": "1004 Jefferson Avenue, Building 717",
            "city": "Goose Creek",
            "state": "SC",
            "zip": "29445",
            "isPrimary": true
        }],
        "rank": null,
        "faq": [{
            "question": null,
            "answer": null
        }]
    },
    {
        "_id": "resource_nmcrs_combat_casualty_assistance_visiting_nurse_program",
        "type": "resource",
        "organization": "community resource",
        "categoryId": "category_basic-needs-assistance",
        "name": "CCA Visiting Nurse Program",
        "formalName": "Navy-Marine Corps Relief Society Combat Casualty Assistance Visiting Nurse Program",
        "shortDesc": "face to face nurse visits at no cost to service members"
        "purpose": "The Combat Casualty Assistance (CCA) Visiting Nurse Program is available for both active duty and veteran Marines and Sailors and families that have been affected by their Post 9-11 wartime service in Iraq or Afghanistan. Our program is unique in that we have registered nurses who are able to make face to face visits at no cost to our service members, veterans and families regardless of their location and discharge status.  Since the stresses of combat may not become obvious for many years, our nurses are available to help whenever needed, however we find the transition and reintegration phase to be most challenging for the Marine/Sailor and family. Our program is also available to help anyone who may have lost a loved one as a result of their combat service.  While complying with all HIPAA guidelines, the CCA Visiting Nurses role is customized to each patient and family. Here is a small example of what our program offers:  Educate family members on the Marine/Sailor's physical and/or psychological injuries to include Post Traumatic Stress (PTS) and Traumatic Brain Injury (TBI).  Perform assessment of medical and non-medical needs (housing, financial, benefits, employment, education...) and assist the patient and family in identifying and utilizing available local, state and national agencies and resources. Collaborate with the healthcare team at Military Treatment Facilities and VA Hospitals to connect the Marine/Sailor to treatment, or reinforce existing plan of care. Additionally, we serve as an advocate helping them navigate through the Tricare and VA system to make sure they are getting the help they need.  Assist patient and family in identifying short and long term goals, while providing ongoing emotional support.  To make a referral or learn more about our program, please feel free to contact Kim Bradley, RN, BSN. I am the nurse who covers the state of SC."
        "website": "http://www.nmcrs.org/",
        "contacts": [{
            "name": "Kim Bradley",
            "office": null,
            "title": "Combat Casualty Visiting Nurse",
            "phone": "571-216-6329",
            "email": "Kim.Bradley@nmcrs.org",
            "isPrimary": true
        }],
        "addresses": [{
            "location": "Navel Weapons Station",
            "street": "1004 Jefferson Avenue, Building 717",
            "city": "Goose Creek",
            "state": "SC",
            "zip": "29445",
            "isPrimary": true
        }],
        "rank": null,
        "faq": [{
            "question": null,
            "answer": null
        }]
    },
    {
        "_id": "resource_the_salvation_army",
        "type": "resource",
        "organization": "community resource",
        "categoryId": "category_basic-needs-assistance",
        "name": "Salvation Army",
        "formalName": "The Salvation Army",
        "shortDesc": "providing food, clothing, and shelter",
        "purpose": "The Salvation Army provides food, clothing, shelter, financial assistance, and after school programs to all those in need without discrimination."
        "website": "http://www.salvationarmycarolinas.org/charleston/home/",
        "contacts": [{
            "name": null,
            "office": null,
            "title": null,
            "phone": "843-747-5271",
            "email": null,
            "isPrimary": true
        }],
        "addresses": [{
            "location": "The Salvation Army",
            "street": "4248 Dorchester Rd.",
            "city": "North Charleston",
            "state": "SC",
            "zip": "29407",
            "isPrimary": true
        }],
        "rank": null,
        "faq": [{
            "question": null,
            "answer": null
        }]
    },
    {
        "_id": "resource_sc_army_national_guard_family_programs",
        "type": "resource",
        "organization": "community resource",
        "categoryId": "category_basic-needs-assistance",
        "name": "Family Assistance Program",
        "formalName": "SC Army National Guard-Family Programs",
        "shortDesc": "pre and post-deployment counseling",
        "purpose": "The Family Assistance Program exists to educate National Guard members and their families about life in the military and how to cope with its unique challenges. In addition to this support, there is a Community Outreach component to connect National Guard members with local, regional and national resources to support them in their daily lives and activities, pre and post-deployment."
        "website": "www.scguard.com",
        "contacts": [{
            "name": "Audra Harmon",
            "office": "Citadel Armory",
            "title": "Family Assistance Specialist",
            "phone": "803-429-9792",
            "email": "audra.d.harmon.ctr@mail.mil",
            "isPrimary": true
        },
    {"name": "Gina Franklin",
    "office": "Citadel Armory",
    "title": "Veterans Advocate",
    "phone": "803-299-0506",
    "email": "gina.marshall@sebapro.com",
    "isPrimary": true}
      ],
        "addresses": [{
            "location": "Citadel Armory",
            "street": "68 Hagood Street",
            "city": "Charleston",
            "state": "SC",
            "zip": "29403",
            "isPrimary": true
        }],
        "rank": null,
        "faq": [{
            "question": null,
            "answer": null
        }]
    },
    {
        "_id": "resource_united_states_marie_corps_wounded_warrior_regiment",
        "type": "resource",
        "organization": "community resource",
        "categoryId": "category_basic-needs-assistance",
        "name": "WWR",
        "formalName": "United States Marine Corps Wounded Warrior Regiment",
        "shortDesc": "help wounded, ill or injured Marines transition from Active Duty or Reserves to Veteran status.",
        "purpose": "District Injured Support Coordinators (DISCs) are an integral part of the Wounded Warrior Regiment’s (WWR) support structure. DISCs are the WWR Commanding Officer’s representatives in the civilian community. They are located throughout the country to help wounded, ill or injured (WII) Marines transition from Active Duty or Reserves to Veteran status. They provide support and problem resolution, including non-medical care management. DISC’s support WII Active Duty Marines transitioning to Veteran Status, WII Reserve Marines, WII Active Duty Marines recovering in remote locations away from Military or Federal DISC’s resources. provide:  Face-to-face contact with WII Marines and their families requiring assistance, Assistance to link WII Marines to Department of Veterans Affairs (VA) and community resources, Referrals to VA OIF/OEF Coordinators who help coordinate combat Veteran care, Referrals to VA OIF/OEF Coordinators who help coordinate combat Veteran care, Information on family and caregiver support services (i.e. respite care, scholarship opportunities, counseling support), Access to education and employment resources in their local communities (i.e. resume development, interview skills, network/ employment opportunities, and application completion), Support in working with representatives from medical facilities, the VA, legal authorities, businesses, and non-profit organizations, Immediate access to the WWR’s Medical Section and VA for psychological health resources and support, including referrals to local resources to ensure they receive timely and appropriate care.  The goal of the DISC is to return well-adjusted WII Marine veterans to their communities who have the knowledge and skills to self-advocate and help other WII Marines. "
        "website": "www.woundedwarriorregiment.org",
        "contacts": [{
            "name": "Mark Holyfield",
            "office": null,
            "title": "District Injured Support Coordinator",
            "phone": null,
            "email": "holyfield.usmcdisc@gmail.com",
            "isPrimary": true
        }],
        "addresses": [{
            "location": null,
            "street": null,
            "city": null,
            "state": null,
            "zip": null,
            "isPrimary": true
        }],
        "rank": null,
        "faq": [{
            "question": null,
            "answer": null
        }]
    },
    {
        "_id": "resource_army_onesource",
        "type": "resource",
        "organization": "community resource",
        "categoryId": "category_basic-needs-assistance",
        "name": "Army OneSource",
        "formalName": "Army OneSource",
        "shortDesc": "family program and services",
        "purpose": "Army OneSource is a single point source for Soldiers (Active Duty, Reserve, and Guard), their spouses, and their family members with resources and assistance in Family Programs and Services; Health Care; Soldier and Family Housing; Child, Youth, and School Services; Education, Careers, and Libraries; Recreation, Travel, and BOSS; and Community Support."
        "website": "www.MyArmyOneSource.com",
        "contacts": [{
            "name": "Nana Knowles",
            "office": null,
            "title": "State Community Support Coordinator (NC & SC)",
            "phone": "910-429-4493",
            "email": "NKnowels@afsc.com",
            "isPrimary": true
        }],
        "addresses": [{
            "location": null,
            "street": null,
            "city": null,
            "state": null,
            "zip": null,
            "isPrimary": true
        }],
        "rank": null,
        "faq": [{
            "question": null,
            "answer": null
        }]
    },

    //EMPLOYMENT
    {
        "_id": "resource_vocational_rehabilitation_ralph_h._johson_va_medical_center",
        "type": "resource",
        "organization": "general",
        "categoryId": "category_employment",
        "name": "Vocational Rehabilitation",
        "formalName": "Vocational Rehabilitation, Ralph H. Johnson VA Medical Center",
        "shortDesc": "assisting the homeless, unemployed and those with disabilities with employment services",
        "purpose": "To assist veterans in preparing for, obtaining, and maintaining employment. To qualify for services veterans must have a mental or physical disability or be homeless and unemployed. Referrals are made by VA providers. Please call for additional information."
        "website": "http://www.benefits.va.gov/columbia/vre_ncharleston.asp",
        "contacts": [{
            "name": "Joan Dunn",
            "office": "Ralph H. Johnson Veterans Affairs Medical Center",
            "title": "Vocational Rehabilitation Specialist",
            "phone": "843-789-7830",
            "email": "Joan.Dunn@va.gov",
            "isPrimary": true
        }],
        "addresses": [{
            "location": "Ralph H. Johnson Veterans Affairs Medical Center",
            "street": "109 Bee Street",
            "city": "Charleston",
            "state": "SC",
            "zip": "29401",
            "isPrimary": true
        }],
        "rank": null,
        "faq": [{
            "question": null,
            "answer": null
        }]
    },
    {
        "_id": "resource_association_of_the_u.s._army,_charleston,_sc_sub-chapter_
        of_the_columbia_sc_chapter",
        "type": "resource",
        "organization": "community resource",
        "categoryId": "category_employment",
        "name": "AUSA",
        "formalName": "Association of the U.S. Army (AUSA), Charleston, SC Sub-Chapter of the Columbia SC Chapter",
        "shortDesc": "post-transition employment services",
        "purpose": "AUSA is a not-for-profit, professional, education organization devoted to helping troops, veterans, their families, and all of our armed services communities in the Low Country, SC. AUSA’s Charleston Sub-Chapter (of the Palmetto – Fort Jackson SC Chapter) helps troops and vets write resumes and cover letters, learn to network and interview effectively, follow up after interviews, and helps find suitable employment. The AUSA Charleston Sub-Chapter also adopts Army (Regular, Reserve, and National Guard) units to help identify short-term housing, ships supplies and comfort items to troops overseas, helps industries find reliable employees, hosts social events for troops and their families, distributes helpful publications for parents and spouses, and adopts the widows and widowers of troops killed in the war on terror."
        "website": "www.ausa.org",
        "contacts": [{
            "name": "LTC W. Larry Dandridge (Retired)",
            "office": "Association of the U.S. Army (AUSA), Charleston, SC Sub-Chapter of the Columbia SC Chapter",
            "title": "AUSA Charleston SC Chapter VP for Veterans Affairs",
            "phone": "843-276-7164",
            "email": "LDandridge@earthlink.net",
            "isPrimary": true
        }],
        "addresses": [{
            "location": "Association of the U.S. Army (AUSA), Charleston, SC Sub-Chapter of the Columbia SC Chapter",
            "street": "236 North Ainsdale Drive",
            "city": "North Charleston",
            "state": "SC",
            "zip": "29414",
            "isPrimary": true
        }],
        "rank": null,
        "faq": [{
            "question": null,
            "answer": null
        }]
    },
    {
        "_id": "resource_goodwill_industries_of_lower_south_carolina",
        "type": "resource",
        "organization": "community resource",
        "categoryId": "category_employment",
        "name": "Goodwill",
        "formalName": "Goodwill Industries of Lower South Carolina",
        "shortDesc": "employment training",
        "purpose": "The Palmetto Goodwill mission is to help people “achieve their full potential through the dignity and power of work.” This mission is achieved through employment training and job placement in 18 counties across South Carolina, helping recent graduates of work training programs face the challenges of preparing for the work force and maintaining steady employment to improve financial stability and well-being. Palmetto Goodwill staff offer assistance in career coaching, vocational assessment, skills training and job placement, case management, and training."
        "website": "www.palmettogoodwill.org",
        "contacts": [{
            "name": "Manish Mazyck",
            "office": "Palmetto Goodwill",
            "title": "Veteran Employment Specialist",
            "phone": "843-556-0072",
            "email": "mmazyck@palmettogoodwill.org",
            "isPrimary": true
        }],
        "addresses": [{
            "location": "Palmetto Goodwill",
            "street": "2150 Eagle Drive., Building 100",
            "city": "North Charleston",
            "state": "SC",
            "zip": "29406",
            "isPrimary": true
        }],
        "rank": null,
        "faq": [{
            "question": null,
            "answer": null
        }]
    },
    {
        "_id": "resource_military_community_connection",
        "type": "resource",
        "organization": "community resource",
        "categoryId": "category_employment",
        "name": "MCC",
        "formalName": "Military Community Connection",
        "shortDesc": "holistic care",
        "purpose": "To unite the Veteran population and the local community, Military Community Connection (MCC) seeks to streamline the coordination of care through a collective impact model, facilitating partnerships between community service providers and Veterans to deliver the highest standard of holistic care.
    MCC is proud to manage the SCServes Coordination Center, the first AmericaServes Coordination Center in the state of South Carolina."
        "website": "http://mccunite.org",
        "contacts": [{
            "name": "Marie Elana Roland",
            "office": null,
            "title": "CEO",
            "phone": "855-355-1200",
            "email": "meroland@mccunite.org",
            "isPrimary": true
        }],
        "addresses": [{
            "location": null,
            "street": "2424 City Hall Lane",
            "city": "North Charleston",
            "state": "SC",
            "zip": "29406",
            "isPrimary": true
        }],
        "rank": null,
        "faq": [{
            "question": null,
            "answer": null
        }]
    },
    {
        "_id": "resource_operation_palmetto_employment",
        "type": "resource",
        "organization": "community resource",
        "categoryId": "category_employment",
        "name": "Operation Palmetto Employment",
        "formalName": "Operation Palmetto Employment",
        "shortDesc": "career counseling",
        "purpose": "Former governor Nikki Haley, together with the SC Army National Guard and the SC Department of Employment and Workforce, launched Operation Palmetto Employment as a state-wide effort to help service members, veterans, and family members find fulfilling careers in the civilian community."
        "website": "http://operationpalmettoemployment.sc.gov/",
        "contacts": [{
            "name": "Stanley Cox",
            "office": null,
            "title": "Employment Advisor",
            "phone": "843-607-6698",
            "email": "stanleyalyse@comcast.com",
            "isPrimary": true
        }],
        "addresses": [{
            "location": null,
            "street": null,
            "city": null,
            "state": null,
            "zip": null,
            "isPrimary": true
        }],
        "rank": null,
        "faq": [{
            "question": null,
            "answer": null
        }]
    },
    {
        "_id": "resource_sc_works_trident",
        "type": "resource",
        "organization": "community resource",
        "categoryId": "category_employment",
        "name": "SC Works Trident",
        "formalName": "SC Works Trident",
        "shortDesc": "connect potential employees with employers",
        "purpose": "To connect potential employees with employers through career fairs, job postings, and skills
    training."
    "website": "http://www.tridentscworks.org/index.htm",
        "contacts": [{
            "name": "Chuck Alexander",
            "office": null,
            "title": null,
            "phone": [{"charlestonCounty": "843-574-1800"},
            {"berkeleyCounty": "843-761-4400"},{"dorchesterCounty": "843-821-0695"}],
            "email": "calexander@dew.sc.gov",
            "isPrimary": true
        }],
        "addresses": [{
            "location": "SC Works Charleston Center",
            "street": "1930 Hanahan Road,  Suite 200",
            "city": "North Charleston",
            "state": "SC",
            "zip": "29406",
            "isPrimary": true
        },
    {"location": "SC Works Berkeley Center",
    "street": "100 South Highway 52",
    "city": "Moncks Corner",
    "state": "SC",
    "zip": "29461",
    "isPrimary": false
    },
    {"location": "SC Works Dorchester Center",
    "street": "2885 West 5th North Street, Highway 78",
    "city": "Summerville",
    "state": "SC",
    "zip": "29483",
    "isPrimary": false
    }
      ],
        "rank": null,
        "faq": [{
            "question": null,
            "answer": null
        }]
    },
    {
        "_id": "resource_south_carolina_vocational_rehabilitation",
        "type": "resource",
        "organization": "community resource",
        "categoryId": "category_employment",
        "name": "SC Vocational Rehabilitation",
        "formalName": "South Carolina Vocational Rehabilitation",
        "shortDesc": "connect potential employees with employers",
        "purpose": "assists disabled with obtaining employment"
    "website": "www.scvrd.net",
        "contacts": [{
            "name": null,
            "office": null,
            "title": null,
            "phone": [{"charlestonCounty": "843-740-1600"},
            {"berkeley-dorchesterCounty": "843-761-6036"}
            "email": null
            "isPrimary": true
        }],
        "addresses": [{
            "location": "Charleston County Center",
            "street": "4360 Dorchester Road",
            "city": "North Charleston",
            "state": "SC",
            "zip": "29405",
            "isPrimary": true
        },
    {"location": "Berkeley-Dorchester County Center",
    "street": "2954 South Live Oak Drive",
    "city": "Moncks Corner",
    "state": "SC",
    "zip": "29461",
    "isPrimary": false
    },
    {"location": "SC Works Dorchester Center",
    "street": "2885 West 5th North Street, Highway 78",
    "city": "Summerville",
    "state": SC,
    "zip": 29483,
    "isPrimary": false
    }
      ],
        "rank": null,
        "faq": [{
            "question": null,
            "answer": null
        }]
    }
