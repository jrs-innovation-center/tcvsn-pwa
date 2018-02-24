require('dotenv').config()

const PouchDB = require('pouchdb-core')
PouchDB.plugin(require('pouchdb-adapter-mysql'))
const db = new PouchDB('data', { adapter: 'mysql' })

db
  .bulkDocs([
    {
      _id: 'category_education',
      type: 'category',
      name: 'College Education and Vocational Certification',
      shortDesc:
        'assists current and retired military members in obtaining education and training',
      desc:
        'College Education and Vocational Certification includes programs that assist current and retired military members to enter institutions of higher education and to obtain additional specialized training or certification necessary for part-time and/or full-time employment.',
      icon: 'school'
    },
    {
      _id: 'category_financial-and-legal',
      type: 'category',
      name: 'Financial and Legal Assistance',
      shortDesc:
        'programs and services that offer financial education, counseling and other help to veterans',
      desc:
        'Financial & Legal Assistance includes programs and services that offer financial education, management, and counseling to help current service members, veterans and their families become stable in financial matters, and legal assistance to qualifying veterans and their families.',
      icon: 'attach_money'
    },

    {
      _id: 'category_health-and-wellness',
      type: 'category',
      name: 'Health and Wellness',
      shortDesc:
        'programs and services that provide mental, physical, and spiritual support',
      desc:
        'Health & Wellness includes programs and services that provide mental, physical, and spiritual support for current military members, retired veterans, caregivers, and for the friends and family of those individuals mentioned previously.',
      icon: 'rowing'
    },

    {
      _id: 'category_housing-and-homeless-prevention-programs',
      type: 'category',
      name: 'Housing and Homeless Prevention Programs',
      shortDesc:
        'programs and services that provide assistance in identifying safe and affordable housing',
      desc:
        'Housing/Homeless Prevention Programs include programs and services that provide assistance in identifying safe, affordable housing and/or in preventing homelessness through financial support with rental and utility payments.',
      icon: 'home'
    },

    {
      _id: 'category_information-and-referral-services',
      type: 'category',
      name: 'Information and Referral Services',
      shortDesc: 'telephone help and crisis management',
      desc:
        'Information & Referral Services include telephone help/crisis management lines and websites to assist veterans and their family members in locating helpful information.',
      icon: 'message'
    },

    {
      _id: 'category_peer-support-and-recreation',
      type: 'category',
      name: 'Peer Support and Recreation',
      shortDesc:
        'veteran-specific support contacts for emotional wellness through social interactions',
      desc:
        'Peer Support & Recreation includes veteran-specific support contacts for emotional wellness and recreation in terms of community involvement through social interactions.',
      icon: 'supervisor_account'
    },

    {
      _id: 'category_government',
      type: 'category',
      name: 'Government',
      shortDesc: 'advocates for issues relevant to veterans',
      desc:
        'Government includes federal and state representatives who advocate for issues relevant to veterans, especially in relation to benefits.',
      icon: 'domain'
    },
    {
      _id: 'category_rehabilitative-and-recreational-therapy',
      type: 'category',
      name: 'Rehabilitative and Recreational Therapy',
      shortDesc:
        'various therapeutic outlets to connect with other veterans through physical activity',
      desc:
        'Rehabilitative & Recreational Therapy in the context of this resource directory includes programs and services that provide various therapeutic outlets to connect with other veterans through physical activity and volunteer opportunities.',
      icon: 'directions_bike'
    },
    {
      _id: 'category_basic-needs-assistance',
      type: 'category',
      name: 'Basic Needs Assistance',
      shortDesc: 'shelter, food, emergency',
      desc:
        'Basic Needs Assistance includes organizations that provide one or more of the following services: shelter facilities for the homeless and for those escaping situations of domestic violence, food/supplemental nutrition resources, and single-transaction emergency financial assistance in cases of involuntary hardship...',
      icon: 'restaurant'
    },
    {
      _id: 'category_benefits',
      type: 'category',
      name: 'Benefits',
      shortDesc: 'federal, state, and local agencies',
      desc:
        'Benefits include federal, state, and local agencies that assist veterans and their families in filing for claims to receive benefits earned as a result of military service.',
      icon: 'card_giftcard'
    },
    {
      _id: 'category_employment',
      type: 'category',
      name: 'Employment',
      shortDesc: 'assistance in receiving part-time or full-time employment',
      desc:
        'Employment includes programs and services to assist current and retired military members in obtaining part-time and/or full-time employment. This assistance can include cover letter and resume tips, interview tips, learning professional communication expectations and skills, and general job search advice.',
      icon: 'work'
    },
    {
      _id: 'resource_va-homeless-prevention',
      type: 'resource',
      organization: 'general',
      categoryId: 'category_basic-needs-assistance',
      name: 'VA Homeless Prevention',
      formalName: 'VA Homeless Prevention Program & Walk-In Clinic',
      shortDesc: 're-housing assistance and medical care',
      purpose:
        'The Ralph H. Johnson Veterans Affairs Medical Center offers a walk-in clinic for veterans searching for re-housing assistance and means to prevent homelessness. In addition to referral services, the walk-in clinic offers basic outpatient medical care.',
      website: 'www.charleston.va.gov/services/homeless/index.asp',
      contacts: [
        {
          name: 'Linda Williams',
          office: 'Ralph H. Johnson Veterans Affairs Medical Center',
          title: null,
          phone: '843-577-5011',
          email: null,
          isPrimary: true
        }
      ],
      primaryPhone: '843-577-5011',
      addresses: [
        {
          location: 'Ralph H. Johnson Veterans Affairs Medical Center',
          street: '109 Bee Street',
          city: 'Charleston',
          state: 'SC',
          zip: '29401',
          isPrimary: true
        }
      ],
      rank: null,
      faq: []
    },
    {
      _id: 'resource_airman-and-family-readiness-center',
      type: 'resource',
      organization: 'community resource',
      categoryId: 'category_basic-needs-assistance',
      name: 'Airman and Family Readiness Center',
      formalName:
        'Airman & Family Readiness Center-Transition Assistance Program (TAP)',
      shortDesc: 'pre-separation transition counseling',
      purpose:
        'The Airman & Family Readiness Center assists all Reserves, Active Duty, National Guard, retired veterans and civilian employees regardless of branch. The Transition Assistance Program (TAP) assists those associated specifically with the United States Air Force and prepares separating, retiring, and demobilizing service members and their families with skills and knowledge to facilitate a successful transition from life in the military to the civilian sector. The first step in the transition process is to complete the congressionally-mandated pre-separation counseling session, which provides detailed information on the various benefits and services available to separating members. Each Family Readiness Center is staffed to provide personalized assistance for all transition-related needs of armed services members.',
      website:
        'www.jbcharleston.com/youth-and-family/air-base/airman-a-family-readiness',
      contacts: [
        {
          name: null,
          office: 'Airman and Family Readiness Center',
          title: null,
          phone: '843-963-7231',
          email: null,
          isPrimary: true
        }
      ],
      primaryPhone: '843-963-7231',
      addresses: [
        {
          location: 'Airman & Family Readiness Center',
          street: '104 E. Simpson Street, Building 500',
          city: 'Joint Base Charleston',
          state: 'SC',
          zip: '29404',
          isPrimary: true
        }
      ],
      rank: null,
      faq: []
    },
    {
      _id: 'resource_red-cross-lowcountry-sc',
      type: 'resource',
      organization: 'community resource',
      categoryId: 'category_basic-needs-assistance',
      name: 'Red Cross Lowcountry SC',
      formalName: 'American Red Cross of the Lowcountry - SC',
      shortDesc: 'emergency communication and transition services',
      purpose:
        'The American Red Cross provides emergency communication services to military (active duty, National Guard, Reserves, retired, and veterans) and their families, helping them locate and send messages to their loved ones across the globe. When service members return home, they have access to several programs and American Red Cross volunteers who are ready and willing to ease the transition from deployment or discharge into the civilian sector. Programs provided include, but a renot limited to, emergency financial assistance referrals, disaster preparedness and response, reconnection and family mental health education, resiliency training to cope with the challenges of life in the military, and supportive transitional services for wounded soldiers and their family members. We also offer volunteer opportunities in all lines of service.To initiate an Emergency Communication Message, call 1-877-272-7337 when you need to contact a service member in the event of a family emergency. This service is available 365 days a year, 24 hours a day.',
      website: 'www.redcross.org/what-we-do/support-military-families',
      contacts: [
        {
          name: 'Jeanne Carmichael',
          office: 'American Red Cross of the Lowcountry - SC',
          title: 'Manager, Service to the Armed Forces',
          phone: '843-764-2323',
          email: 'Jeanne.Carmichael@redcross.org',
          isPrimary: true
        }
      ],
      primaryPhone: '843-764-2323',
      addresses: [
        {
          location: 'American Red Cross of the Lowcountry - SC',
          street: '2424 City Hall Lane, Suite A',
          city: 'North Charleston',
          state: 'SC',
          zip: '29406',
          isPrimary: true
        }
      ],
      rank: null,
      faq: []
    },
    {
      _id: 'resource_one80-place',
      type: 'resource',
      organization: 'community resource',
      categoryId: 'category_basic-needs-assistance',
      name: 'One80 Place',
      formalName: 'One80 Place',
      shortDesc: 'homeless services',
      purpose:
        'One80 Place is the largest homeless service provider in South Carolina, serving a hot meal daily in the Charleston-area homeless shelter and the Palmetto House shelter in Summerville, SC. One80 Place staff are certified to oversee comprehensive case management for all clients, including military veterans, civilians, individuals and families.',
      website: 'www.one80place.org',
      contacts: [
        {
          name: 'Selena Wilson',
          office: 'One80 Place',
          title: 'Chief Program Officer',
          phone: '843-723-9477',
          email: 'swilson@one80place.org',
          isPrimary: false
        },
        {
          name: 'Supportive Services for Veterans & Families (SSVF) Hotline',
          office: 'One80 Place',
          title: null,
          phone: '843-212-8668',
          email: null,
          isPrimary: true
        }
      ],
      primaryPhone: '843-212-8668',
      addresses: [
        {
          location: 'One80 Place',
          street: '35 Walnut Street',
          city: 'Charleston',
          state: 'SC',
          zip: '29403',
          isPrimary: true
        }
      ],
      rank: null,
      faq: []
    },
    {
      _id: 'resource_hub',
      type: 'resource',
      organization: 'community resource',
      categoryId: 'category_basic-needs-assistance',
      name: 'The Hub',
      formalName: 'Church Mobilization Hub of Charleston',
      shortDesc: 'church revitalization',
      purpose:
        'The Hub is a team of ministry and marketplace partners who work to help vitalize and revitalize churches in the Charleston area through a relational process of formation and mobilization that leads to Gospel saturation, and city-wide church collaboration.',
      website: 'www.thehubcharleston.com',
      contacts: [
        {
          name: 'Craig Tuck',
          office: 'Church Mobilization Hub of Charleston',
          title: 'Strategic Development',
          phone: '843-345-6370',
          email: 'craig@thehubcharleston.com',
          isPrimary: true
        }
      ],
      primaryPhone: '843-345-6370',
      addresses: [],
      rank: null,
      faq: []
    },
    {
      _id: 'resource_origin-sc',
      type: 'resource',
      organization: 'community resource',
      categoryId: 'category_basic-needs-assistance',
      name: 'Origin SC',
      formalName: 'Origin SC (formerly known as Family Services, Inc.)',
      shortDesc:
        'financial, consumer credit, counseling, home purchase, foreclosure, behavioral health services, homeless prevention, homeownership',
      purpose:
        'Origin SC has existed since 1888, bringing hope and quality customer service to the Charleston community and beyond. Our goal is to empower individuals and families to achieve financial independence and sustainability at a cost comparable to industry standards.  Services include:  Bankruptcy Counseling, Behavioral Health Services, VA Conservatorship Program, Consumer Credit Counseling, Foreclosure Prevention, Home Purchase Programs, Homeless Prevention/Supportive Services, Homeless Prevention/Supportive Services, Homeownership Resource Center, Representative Payee Program, Supportive Services for Veterans & Families, Supportive Services for Veterans & Families',
      website: 'www.originsc.org',
      contacts: [
        {
          name: 'David Greer',
          office: null,
          title: 'CEO',
          phone: '843-735-7802',
          email: 'dgeer@originsc.org',
          isPrimary: true
        }
      ],
      primaryPhone: '843-735-7802',
      addresses: [
        {
          location: 'Origin SC',
          street: '4925 Lacross Road',
          city: 'North Charleston',
          state: 'SC',
          zip: '29406',
          isPrimary: true
        }
      ],
      rank: null,
      faq: []
    },
    {
      _id: 'resource_ffsc',
      type: 'resource',
      organization: 'community resource',
      categoryId: 'category_basic-needs-assistance',
      name: 'Fleet And Family Support Center',
      formalName: 'Fleet And Family Support Center',
      shortDesc: 'transition-related services',
      purpose:
        "The Fleet and Family Support Center (FFSC), Naval Weapons Station is the military community's primary resource for information and services. We are recognized by commands in the area as vital to the success of their mission. We serve with pride and distinction and are renowned for our superb performance. The Fleet and Family support Center assists all Reserves, Active Duty, National Guard, retired veterans and civilian employees regardless of service branch. The Transition Assistance Program (TAP) assists and prepares members separating, retiring, or demobilizing service members and their families with skills and knowledge to facilitate a successful transition from life in the military to the civilian sector. Each Family Readiness Center is staffed to provide personalized assistance for all transition-related needs of armed services members.",
      website:
        'https://www.jbcharleston.com/youth-family/military-family-support/',
      contacts: [],
      primaryPhone: null,
      addresses: [
        {
          location: 'Fleet & Family Support Center',
          street: '1005 Jefferson Avenue., Building 755',
          city: 'Goose Creek',
          state: 'SC',
          zip: '29445',
          isPrimary: true
        }
      ],
      rank: null,
      faq: []
    },
    {
      _id: "resource_my-sister's-house",
      type: 'resource',
      organization: 'community resource',
      categoryId: 'category_basic-needs-assistance',
      name: "My Sister's House",
      formalName: 'My Sister’s House, Inc.',
      shortDesc: 'emergency shelter for women and children',
      purpose:
        "My Sister's House provides a safe-haven for women and children looking to escape the cycle of domestic violence and other forms of abuse. An emergency shelter is available 24 hours per day with 36 beds for women and children throughout Berkeley, Charleston, and Dorchester counties.",
      website: 'mysistershouse.org/',
      contacts: [
        {
          name: null,
          office: null,
          title: null,
          phone: '843-767-4069',
          email: null,
          isPrimary: false
        },
        {
          name: null,
          office: null,
          title: null,
          phone: '843-744-3242',
          email: null,
          isPrimary: false
        },
        {
          name: '24-hour Crisis Hotline',
          office: null,
          title: null,
          phone: '843-273-HOPE',
          email: null,
          isPrimary: true
        }
      ],
      primaryPhone: '843-273-4673',
      addresses: [],
      rank: null,
      faq: []
    },
    {
      _id: 'resource_NMCRS',
      type: 'resource',
      organization: 'community resource',
      categoryId: 'category_financial-and-legal',
      name: 'NMCRS',
      formalName: 'Navy-Marine Corps Relief Society',
      shortDesc:
        'transportation, food, funernal, medical, dental, rent, utility, bills',
      purpose:
        'Potential clients must have an active military ID. The NMCRS is unable to assist non-military civilians. Agency provides military assistance to military personnel, their immediate family members who have ID, and military 20 (or more) year retirees. Interest-free loans, grants or a combination of the two may provide:  Emergency transportation, Food, Funeral Expenses, Medical/Dental Needs, Rental & utility bill assistance, Eligibility for NMCRS services covers Sailors, Marines, and Army currently on active duty and their immediate families ONLY. Retirees with 20 or more years of active military service and widows of eligible service members and retirees also may qualify.',
      website: 'www.nmcrs.org/',
      contacts: [
        {
          name: 'Navy-Marine Corps Relief Society',
          office: 'Naval Weapons Station',
          title: 'Combat Casualty Visiting Nurse, RN, BSN',
          phone: '843-794-7662',
          email: null,
          isPrimary: true
        }
      ],
      primaryPhone: '843-794-7662',
      addresses: [
        {
          location: 'Naval Weapons Station',
          street: '1004 Jefferson Avenue, Building 717',
          city: 'Goose Creek',
          state: 'SC',
          zip: '29445',
          isPrimary: true
        }
      ],
      rank: null,
      faq: []
    },
    {
      _id: 'resource_cca-visiting-nurse-program',
      type: 'resource',
      organization: 'community resource',
      categoryId: 'category_health-and-wellness',
      name: 'NMCRS CCA Visiting Nurse Program',
      formalName:
        'Navy-Marine Corps Relief Society (NMCRS) Combat Casualty Assistance (CCA) Visiting Nurse Program',
      shortDesc: 'face to face nurse visits at no cost to service members',
      purpose:
        'The Combat Casualty Assistance (CCA) Visiting Nurse Program is available for both active duty and veteran Marines and Sailors and families that have been affected by their Post 9-11 wartime service in Iraq or Afghanistan. Our program is unique in that we have registered nurses who are able to make face to face visits at no cost to our service members, veterans and families regardless of their location and discharge status. Since the stresses of combat may not become obvious for many years, our nurses are available to help whenever needed, however we find the transition and reintegration phase to be most challenging for the Marine/Sailor and family. Our program is also available to help anyone who may have lost a loved one as a result of their combat service.  While complying with all HIPAA guidelines, the CCA Visiting Nurses role is customized to each patient and family. Here is a small example of what our program offers Educate family members on the Marine/Sailor physical and/or psychological injuries to include Post Traumatic Stress (PTS) and Traumatic Brain Injury (TBI). Perform assessment of medical and non-medical needs (housing, financial, benefits, employment, education...) and assist the patient and family in identifying and utilizing available local, state and national agencies and resources.  Collaborate with the healthcare team at Military Treatment Facilities and VA Hospitals to connect the Marine/Sailor to treatment, or reinforce existing plan of care. Additionally, we serve as an advocate helping them navigate through the Tricare and VA system to make sure they are getting the help they need. Assist patient and family in identifying short and long term goals, while providing ongoing emotional support. To make a referral or learn more about our program, please feel free to contact Kim Bradley, RN, BSN. I am the nurse who covers the state of SC.',
      website: 'www.nmcrs.org',
      contacts: [
        {
          name: 'Kim Bradley, RN, BSN',
          office: null,
          title: 'Combat Casualty Visiting Nurse',
          phone: '571-216-6329',
          email: 'Kim.Bradley@nmcrs.org',
          isPrimary: false
        }
      ],
      primaryPhone: '571-216-6329',
      addresses: [
        {
          location: 'Naval Weapons Station',
          street: '1004 Jefferson Avenue, Building 717',
          city: 'Goose Creek',
          state: 'SC',
          zip: '29445',
          isPrimary: true
        }
      ],
      rank: null,
      faq: []
    },
    {
      _id: 'resource_salvation-army',
      type: 'resource',
      organization: 'community resource',
      categoryId: 'category_basic-needs-assistance',
      name: 'Salvation Army',
      formalName: 'The Salvation Army',
      shortDesc: 'food, clothing, shelter',
      purpose:
        'The Salvation Army provides food, clothing, shelter, financial assistance, and after school programs to all those in need without discrimination.',
      website: 'www.salvationarmycarolinas.org/charleston/home/',
      contacts: [
        {
          name: 'The Salvation Army',
          office: null,
          title: null,
          phone: '843-747-5271',
          email: null,
          isPrimary: true
        }
      ],
      primaryPhone: '843-747-5271',
      addresses: [
        {
          location: 'The Salvation Army',
          street: '4248 Dorchester Rd.',
          city: 'North Charleston',
          state: 'SC',
          zip: '29407',
          isPrimary: true
        }
      ]
    },
    {
      _id: 'resource_sc-army-national-guard-family-programs',
      type: 'resource',
      organization: 'community resource',
      categoryId: 'category_basic-needs-assistance',
      name: 'SC Army National Guard-Family Programs',
      formalName: 'SC Army National Guard-Family Programs',
      shortDesc: 'pre and post-deployment counseling',
      purpose:
        'The Family Assistance Program exists to educate National Guard members and their families about life in the military and how to cope with its unique challenges. In addition to this support, there is a Community Outreach component to connect National Guard members with local, regional and national resources to support them in their daily lives and activities, pre and post-deployment.',
      website: 'www.scguard.com',
      contacts: [
        {
          name: 'Audra Harmon',
          office: 'Citadel Armory',
          title: 'Family Assistance Specialist',
          phone: '803-429-9792',
          email: 'audra.d.harmon.ctr@mail.mil',
          isPrimary: true
        },
        {
          name: 'Gina Franklin',
          office: 'Citadel Armory',
          title: 'Veterans Advocate',
          phone: '803-299-0506',
          email: 'gina.marshall@sebapro.com',
          isPrimary: false
        }
      ],
      primaryPhone: '803-429-9792',
      addresses: [
        {
          location: 'Citadel Armory',
          street: '68 Hagood Street',
          city: 'Charleston',
          state: 'SC',
          zip: '29403',
          isPrimary: true
        }
      ],
      rank: null,
      faq: []
    },
    {
      _id: 'resource_wwr',
      type: 'resource',
      organization: 'community resource',
      categoryId: 'category_basic-needs-assistance',
      name: 'WWR',
      formalName: 'United States Marine Corps Wounded Warrior Regiment',
      shortDesc:
        'help wounded, ill or injured Marines transition from Active Duty or Reserves to Veteran status.',
      purpose:
        'District Injured Support Coordinators (DISCs) are an integral part of the Wounded Warrior Regiment’s (WWR) support structure. DISCs are the WWR Commanding Officer’s representatives in the civilian community. They are located throughout the country to help wounded, ill or injured (WII) Marines transition from Active Duty or Reserves to Veteran status. They provide support and problem resolution, including non-medical care management. DISC’s support WII Active Duty Marines transitioning to Veteran Status, WII Reserve Marines, WII Active Duty Marines recovering in remote locations away from Military or Federal DISC’s resources. provide:  Face-to-face contact with WII Marines and their families requiring assistance, Assistance to link WII Marines to Department of Veterans Affairs (VA) and community resources, Referrals to VA OIF/OEF Coordinators who help coordinate combat Veteran care, Referrals to VA OIF/OEF Coordinators who help coordinate combat Veteran care, Information on family and caregiver support services (i.e. respite care, scholarship opportunities, counseling support), Access to education and employment resources in their local communities (i.e. resume development, interview skills, network/ employment opportunities, and application completion), Support in working with representatives from medical facilities, the VA, legal authorities, businesses, and non-profit organizations, Immediate access to the WWR’s Medical Section and VA for psychological health resources and support, including referrals to local resources to ensure they receive timely and appropriate care.  The goal of the DISC is to return well-adjusted WII Marine veterans to their communities who have the knowledge and skills to self-advocate and help other WII Marines.',
      website: 'www.woundedwarriorregiment.org',
      contacts: [
        {
          name: 'Mark Holyfield',
          office: null,
          title: 'District Injured Support Coordinator',
          phone: null,
          email: 'holyfield.usmcdisc@gmail.com',
          isPrimary: false
        },
        {
          name: 'Call Center 24/7 365',
          office: 'Call Center 24/7 365',
          title: 'Call Center 24/7 365',
          phone: '877-487-6299',
          email: null,
          isPrimary: true
        }
      ],
      primaryPhone: '877-487-6299',
      addresses: [],
      rank: null,
      faq: []
    },
    {
      _id: 'resource_army-onesource',
      type: 'resource',
      organization: 'community resource',
      categoryId: 'category_basic-needs-assistance',
      name: 'Army OneSource',
      formalName: 'Army OneSource',
      shortDesc:
        'Health, Housing, Child, Youth, School, Education, Careers, Libraries, Recreation, Travel',
      purpose:
        'Army OneSource is a single point source for Soldiers (Active Duty, Reserve, and Guard), their spouses, and their family members with resources and assistance in Family Programs and Services; Health Care; Soldier and Family Housing; Child, Youth, and School Services; Education, Careers, and Libraries; Recreation, Travel, and BOSS; and Community Support.',
      website: 'www.MyArmyOneSource.com',
      contacts: [
        {
          name: 'Nana Knowles',
          office: null,
          title: 'State Community Support Coordinator (NC & SC)',
          phone: '910-429-4493',
          email: 'NKnowels@afsc.com',
          isPrimary: true
        }
      ],
      primaryPhone: '910-429-4493',
      addresses: [],
      rank: null,
      faq: []
    },

    {
      _id: 'resource_vocational-rehabilitation',
      type: 'resource',
      organization: 'general',
      categoryId: 'category_employment',
      name: 'Vocational Rehabilitation',
      formalName:
        'Vocational Rehabilitation, Ralph H. Johnson VA Medical Center',
      shortDesc:
        'assisting the homeless, unemployed and those with disabilities with employment services',
      purpose:
        'To assist veterans in preparing for, obtaining, and maintaining employment. To qualify for services veterans must have a mental or physical disability or be homeless and unemployed. Referrals are made by VA providers. Please call for additional information.',
      website: 'www.benefits.va.gov/columbia/vre_ncharleston.asp',
      contacts: [
        {
          name: 'Joan Dunn',
          office: 'Ralph H. Johnson Veterans Affairs Medical Center',
          title: 'Vocational Rehabilitation Specialist',
          phone: '843-789-7830',
          email: 'Joan.Dunn@va.gov',
          isPrimary: true
        }
      ],
      primaryPhone: '843-789-7830',
      addresses: [
        {
          location: 'Ralph H. Johnson Veterans Affairs Medical Center',
          street: '109 Bee Street',
          city: 'Charleston',
          state: 'SC',
          zip: '29401',
          isPrimary: true
        }
      ],

      rank: null,
      faq: []
    },
    {
      _id: 'resource_AUSA-SC',
      type: 'resource',
      organization: 'community resource',
      categoryId: 'category_employment',
      name: 'AUSA',
      formalName:
        'Association of the U.S. Army (AUSA), Charleston, SC Sub-Chapter of the Columbia SC Chapter',
      shortDesc: 'post-transition employment services',
      purpose:
        'AUSA is a not-for-profit, professional, education organization devoted to helping troops, veterans, their families, and all of our armed services communities in the Low Country, SC. AUSA’s Charleston Sub-Chapter (of the Palmetto – Fort Jackson SC Chapter) helps troops and vets write resumes and cover letters, learn to network and interview effectively, follow up after interviews, and helps find suitable employment. The AUSA Charleston Sub-Chapter also adopts Army (Regular, Reserve, and National Guard) units to help identify short-term housing, ships supplies and comfort items to troops overseas, helps industries find reliable employees, hosts social events for troops and their families, distributes helpful publications for parents and spouses, and adopts the widows and widowers of troops killed in the war on terror.',
      website: 'www.ausa.org',
      contacts: [
        {
          name: 'LTC W. Larry Dandridge (Retired)',
          office:
            'Association of the U.S. Army (AUSA), Charleston, SC Sub-Chapter of the Columbia SC Chapter',
          title: 'AUSA Charleston SC Chapter VP for Veterans Affairs',
          phone: '843-276-7164',
          email: 'LDandridge@earthlink.net',
          isPrimary: true
        }
      ],
      primaryPhone: '843-276-7164',
      addresses: [
        {
          location:
            'Association of the U.S. Army (AUSA), Charleston, SC Sub-Chapter of the Columbia SC Chapter',
          street: '236 North Ainsdale Drive',
          city: 'North Charleston',
          state: 'SC',
          zip: '29414',
          isPrimary: true
        }
      ],
      rank: null,
      faq: []
    },
    {
      _id: 'resource_goodwill-industries-of-lower-south-carolina',
      type: 'resource',
      organization: 'community resource',
      categoryId: 'category_employment',
      name: 'Goodwill',
      formalName: 'Goodwill Industries of Lower South Carolina',
      shortDesc: 'employment training',
      purpose:
        'The Palmetto Goodwill mission is to help people “achieve their full potential through the dignity and power of work.” This mission is achieved through employment training and job placement in 18 counties across South Carolina, helping recent graduates of work training programs face the challenges of preparing for the work force and maintaining steady employment to improve financial stability and well-being. Palmetto Goodwill staff offer assistance in career coaching, vocational assessment, skills training and job placement, case management, and training.',
      website: 'www.palmettogoodwill.org',
      contacts: [
        {
          name: 'Manish Mazyck',
          office: 'Palmetto Goodwill',
          title: 'Veteran Employment Specialist',
          phone: '843-556-0072',
          email: 'mmazyck@palmettogoodwill.org',
          isPrimary: true
        }
      ],
      primaryPhone: '843-556-0072',
      addresses: [
        {
          location: 'Palmetto Goodwill',
          street: '2150 Eagle Drive., Building 100',
          city: 'North Charleston',
          state: 'SC',
          zip: '29406',
          isPrimary: true
        }
      ],
      rank: null,
      faq: []
    },
    {
      _id: 'resource_mcc',
      type: 'resource',
      organization: 'community resource',
      categoryId: 'category_employment',
      name: 'MCC',
      formalName: 'Military Community Connection',
      shortDesc: 'holistic care',
      purpose:
        'To unite the Veteran population and the local community, Military Community Connection (MCC) seeks to streamline the coordination of care through a collective impact model, facilitating partnerships between community service providers and Veterans to deliver the highest standard of holistic care. MCC is proud to manage the SCServes Coordination Center, the first AmericaServes Coordination Center in the state of South Carolina.',
      website: 'mccunite.org',
      contacts: [
        {
          name: 'Marie Elana Roland',
          office: null,
          title: 'CEO',
          phone: '855-355-1200',
          email: 'meroland@mccunite.org',
          isPrimary: true
        }
      ],
      primaryPhone: '855-355-1200',
      addresses: [
        {
          location: null,
          street: '2424 City Hall Lane',
          city: 'North Charleston',
          state: 'SC',
          zip: '29406',
          isPrimary: true
        }
      ],
      rank: null,
      faq: []
    },
    {
      _id: 'resource_operation-palmetto-employment',
      type: 'resource',
      organization: 'community resource',
      categoryId: 'category_employment',
      name: 'Operation Palmetto Employment',
      formalName: 'Operation Palmetto Employment',
      shortDesc: 'career counseling',
      purpose:
        'Former governor Nikki Haley, together with the SC Army National Guard and the SC Department of Employment and Workforce, launched Operation Palmetto Employment as a state-wide effort to help service members, veterans, and family members find fulfilling careers in the civilian community.',
      website: 'operationpalmettoemployment.sc.gov/',
      contacts: [
        {
          name: 'Stanley Cox',
          office: null,
          title: 'Employment Advisor',
          phone: '843-607-6698',
          email: 'stanleyalyse@comcast.com',
          isPrimary: true
        }
      ],
      primaryPhone: '843-607-6698',
      addresses: [],
      rank: null,
      faq: []
    },
    {
      _id: 'resource_sc-works-trident',
      type: 'resource',
      organization: 'community resource',
      categoryId: 'category_employment',
      name: 'SC Works Trident',
      formalName: 'SC Works Trident',
      shortDesc: 'connect potential employees with employers',
      purpose:
        'To connect potential employees with employers through career fairs, job postings, and skills training.',
      website: 'www.tridentscworks.org/index.htm',
      contacts: [
        {
          name: 'Chuck Alexander',
          office: 'SC Works Charleston Center',
          title: null,
          phone: '843-574-1800',
          email: 'calexander@dew.sc.gov',
          isPrimary: true
        },
        {
          name: 'SC Works Berkeley Center',
          office: 'SC Works Berkeley Center',
          title: null,
          phone: '843-761-4400',
          email: null,
          isPrimary: false
        },
        {
          name: 'SC Works Dorchester Center',
          office: 'SC Works Dorchester Center',
          title: null,
          phone: '843-821-0695',
          email: null,
          isPrimary: false
        }
      ],
      primaryPhone: '843-574-1800',
      addresses: [
        {
          location: 'SC Works Charleston Center',
          street: '1930 Hanahan Road,  Suite 200',
          city: 'North Charleston',
          state: 'SC',
          zip: '29406',
          isPrimary: true
        },
        {
          location: 'SC Works Berkeley Center',
          street: '100 South Highway 52',
          city: 'Moncks Corner',
          state: 'SC',
          zip: '29461',
          isPrimary: false
        },
        {
          location: 'SC Works Dorchester Center',
          street: '2885 West 5th North Street, Highway 78',
          city: 'Summerville',
          state: 'SC',
          zip: '29483',
          isPrimary: false
        }
      ],
      rank: null,
      faq: []
    },
    {
      _id: 'resource_sc-vocational-rehabilitation',
      type: 'resource',
      organization: 'community resource',
      categoryId: 'category_employment',
      name: 'SC Vocational Rehabilitation',
      formalName: 'South Carolina Vocational Rehabilitation',
      shortDesc: 'connect potential employees with employers',
      purpose: 'assists disabled with obtaining employment',
      website: 'www.scvrd.net',
      contacts: [
        {
          name: 'Charleston County Center',
          office: 'Charleston County Center',
          title: null,
          phone: '843-740-1600',
          email: null,
          isPrimary: true
        },
        {
          name: 'Berkeley-Dorchester County Center',
          office: 'Berkeley-Dorchester County Center',
          title: null,
          phone: '843-761-6036',
          email: null,
          isPrimary: false
        }
      ],
      primaryPhone: '843-740-1600',
      addresses: [
        {
          location: 'Charleston County Center',
          street: '4360 Dorchester Road',
          city: 'North Charleston',
          state: 'SC',
          zip: '29405',
          isPrimary: true
        },
        {
          location: 'Berkeley-Dorchester County Center',
          street: '2954 South Live Oak Drive',
          city: 'Moncks Corner',
          state: 'SC',
          zip: '29461',
          isPrimary: false
        }
      ],
      rank: null,
      faq: []
    },

    {
      _id: 'resource_catr',
      type: 'resource',
      organization: 'general',
      categoryId: 'category_rehabilitative_and_recreational_therapy',
      name: 'Charleston Area Therapeutic Riding',
      formalName: 'Charleston Area Therapeutic Riding, Inc. (CATR)',
      shortDesc:
        'Improving the lives of those with disabilities with therapeutic riding and equine reltated activities.',
      purpose:
        'CATR’s mission is to improve the lives of children and adults with disabilities using therapeutic riding and equine related activities. CATR is a PATH International Premier Accredited Center and has been in operation for 22 years. CATR currently works with over 140 individuals with a variety of disabilities each year. We have been working with veterans from the Charleston VA Medical Center as well as other groups. We have WWP scholarships available for veterans who served post 9/11/01.  Therapeutic horseback riding uses the horse as a therapeutic modality that provides physical, psychological, and social benefits to veterans who are healing from injury or illness. The horse’s movement gives multi-sensory input which can improve the veteran’s strength, balance, circulation, posture, endurance, coordination, and agility. Therapeutic riding and equine related activities additionally help to build self-confidence and emotional well-being.',
      website: 'www.catrfarms.org',
      contacts: [
        {
          name: 'Colleen Kimener',
          office: null,
          title: 'Veterans Lead, Horses for Heroes Program',
          phone: '843-559-6060',
          email: 'ckimener@catr-program.org',
          isPrimary: true
        }
      ],
      primaryPhone: '843-559-6060',
      addresses: [
        {
          location: 'Charleston Area Therapeutic Riding, Inc.',
          street: '2669 Hamilton Rd.',
          city: 'Johns Island',
          state: 'SC',
          zip: '29455',
          isPrimary: true
        }
      ],
      rank: null,
      faq: []
    },
    {
      _id: 'resource_phwff',
      type: 'resource',
      organization: 'general',
      categoryId: 'category_rehabilitative_and_recreational_therapy',
      name: 'Project Healing Waters Fly Fishing',
      formalName: 'Project Healing Waters Fly Fishing (PHWFF)',
      shortDesc: 'rehabilitation, fishing',
      purpose:
        'Project Healing Waters Fly Fishing, Inc. (PHWFF)is dedicated to the physical and emotional rehabilitation of disabled active military service personnel and disabled veterans through fly fishing and associated activities including education and outings.  PHWFF provides basic fly fishing, fly casting, fly tying and rod building classes, along with clinics participants ranging from beginners who have never fished before, to those with prior fly fishing and tying experience who are adapting their skills to their new abilities. All fly fishing and tying equipment is provided to the participants at no cost. Fishing trips, both one day and multi-day, are also provided free of charge to participants. PHWFF is unique in that our volunteers are teaching classes on an on-going, long term basis. It is much more than a one day fishing trip. For many participants, particularly disabled veterans, the socialization and camaraderie of the classes are just as important as the fishing outings, and provide them a new activity. PHWFF strives to serve the deserving past and present members of our armed forces who have made great sacrifices in the service of our nation.',
      website: 'www.projecthealingwaters.org',
      contacts: [
        {
          name: 'Walter Shockley',
          office: null,
          title: 'Project Lead-Charleston',
          phone: '740-397-5113',
          email: 'phwffcharleston@gmail.com',
          isPrimary: true
        }
      ],
      primaryPhone: '740-397-5113',
      addresses: [],
      rank: null,
      faq: []
    },
    {
      _id: 'resource_ride-2-recovery',
      type: 'resource',
      organization: 'general',
      categoryId: 'category_rehabilitative_and_recreational_therapy',
      name: 'Project Hero= Ride 2 Recovery',
      formalName: 'Project Hero - Ride 2 Recovery',
      shortDesc:
        'restoring hope and purpose to veterans through cycling-based programs',
      purpose:
        'Ride 2 Recovery, a groundbreaking Veterans program started in 2008, saves lives by restoring hope and purpose.  We are: Providing a way FOR life, Vets helping Vets, Not giving handouts, Believers in hard work, Serving over 10,000 Veterans, Founded on cycling based programs, Expert staff, People who care',
      website: 'www.ride2recovery.com',
      contacts: [
        {
          name: 'Harold Clark',
          office: null,
          title: null,
          phone: '304-545-6366',
          email: null,
          isPrimary: true
        }
      ],
      primaryPhone: '304-545-6366',
      addresses: [],
      rank: null,
      faq: []
    },
    {
      _id: 'resource_warrior-surf-foundation-charleston-surf-lessons',
      type: 'resource',
      organization: 'general',
      categoryId: 'category_rehabilitative_and_recreational_therapy',
      name: 'Warrior Surf Foundation',
      formalName: 'Warrior Surf Foundation - Charleston Surf Lessons',
      shortDesc: 'surf lessons for veterans',
      purpose:
        "Here at Charleston Surf Lessons we live to provide that same moment of exhilaration you get when riding your very first wave. Whether you've never touched a surfboard in your life or have surfed since you were young, we teach you the fundamental techniques that will take your surfing experience to the next level! Our lessons are fun, exciting and perfect for any age. Our Team of qualified, CPR certified, surf instructors will have you up and riding the waves in record time! Get ready for an activity to remember, whether you are planning a surf trip, creating your Folly Beach vacation checklist or are currently living in the Charleston or Folly Beach area but just finally wanting to charge the surf.",
      website: 'www.charlestonsurflessons.com',
      contacts: [
        {
          name: 'Josh Wilson',
          office: null,
          title: null,
          phone: '843-452-5293',
          email: 'josh@charlestonsurflessons.com',
          isPrimary: true
        },
        {
          name: 'Andy Manzi',
          office: null,
          title: null,
          phone: '843-452-5293',
          email: null,
          isPrimary: false
        }
      ],
      primaryPhone: '843-452-5293',
      addresses: [
        {
          location: 'Charleston Surf Lessons',
          street: '1 Center Street',
          city: 'Folly Beach',
          state: 'SC',
          zip: '29439',
          isPrimary: true
        }
      ],
      rank: null,
      faq: []
    },
    {
      _id: 'resource_senator-lindsey-graham',
      type: 'resource',
      organization: 'general',
      categoryId: 'category_government',
      name: 'Senator Lindsey Graham',
      formalName: 'Office of Senator Lindsey Graham',
      shortDesc:
        'dedicated to assisting veterans and their family members meeting their needs.',
      purpose:
        'The Office of Senator Lindsey Graham is dedicated to assisting veterans and their family members meeting their needs. These resources include filing for VA benefits and medical claims, applying to receive the Montgomery GI Bill to pursue higher education, receiving assistance with suicide prevention, filing for survival benefits, accessing military records, and receiving benefits from awards earned while in the service.',
      website: 'www.lgraham.senate.gov/public/',
      contacts: [
        {
          name: null,
          office: 'Office of Senator Lindsey Graham',
          title: null,
          phone: '843-849-3887',
          email: null,
          isPrimary: true
        }
      ],
      primaryPhone: '843-849-3887',
      addresses: [
        {
          location: null,
          street: '530 Johnnie Dodds Blvd., Suite 202',
          city: 'Mt. Pleasant',
          state: 'SC',
          zip: '29464',
          isPrimary: true
        }
      ],
      rank: null,
      faq: []
    },
    {
      _id: 'resource_congressman-sanford',
      type: 'resource',
      organization: 'general',
      categoryId: 'category_government',
      name: 'Congressman Sanford',
      formalName: 'Office of Congressman Sanford',
      shortDesc:
        'focusing on various issues pertinent to the population of Charleston and surrounding areas of the Lowcountry.',
      purpose:
        'Congressman Mark Sanford serves the First District of South Carolina, focusing on various issues pertinent to the population of Charleston and surrounding areas of the Lowcountry.',
      website: 'sanford.house.gov/resources/veterans-resources',
      contacts: [
        {
          name: null,
          office: 'Office of Congressman Sanford',
          title: null,
          phone: '843-352-7572',
          email: null,
          isPrimary: true
        }
      ],
      primaryPhone: '843-352-7572',
      addresses: [
        {
          location: null,
          street: '530 Johnnie Dodds Blvd., Suite 202',
          city: 'Mt. Pleasant',
          state: 'SC',
          zip: '29464',
          isPrimary: true
        }
      ],
      rank: null,
      faq: []
    },
    {
      _id: 'resource_senator-tim-scott',
      type: 'resource',
      organization: 'general',
      categoryId: 'category_government',
      name: 'Senator Tim Scott',
      formalName: 'Office of Senator Tim Scott',
      shortDesc: 'dedicated to assisting veterans',
      purpose:
        'The Office of Senator Tim Scott is dedicated to assisting veterans. These resources include filing for VA benefits and medical claims, applying to receive the Montgomery GI Bill to pursue higher education, receiving assistance with suicide prevention, filing for survival benefits, accessing military records, and receiving benefits from awards earned while attached to the service.',
      website: 'www.scott.senate.gov/resources/veterans',
      contacts: [
        {
          name: 'Roger Yongue',
          office: null,
          title: null,
          phone: '843-727-4525',
          email: 'Roger_Yongue@scott.senate.gov',
          isPrimary: true
        }
      ],
      primaryPhone: '843-727-4525',
      addresses: [
        {
          location: null,
          street: '2500 City Hall Lane, 3rd Floor Suite',
          city: 'North Charleston',
          state: 'SC',
          zip: '29406',
          isPrimary: true
        }
      ],
      rank: null,
      faq: []
    }
  ])
  .then(res => console.log(res))
  .catch(err => console.log(err))
