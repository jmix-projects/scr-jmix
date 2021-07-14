INSERT INTO public.scr_garage (id, name, address, capacity, van_entry, working_hours_from, working_hours_to)
VALUES
('d99d468e-3cc0-01da-295e-595e48fec620', 'P.S. 118', 'Apt. 996 006 Grant Passage, North Bennymouth, NJ 82878-0684', 56, true, '11:11:00', '22:22:00'),
('bfe41616-f03d-f287-1397-8619f5dde390', 'Big Bob''s Beeper Emporium', '9943 Anderson Rest, South Marcelo, OH 85224', 50, false, '10:00:00', '20:00:00'),
('d881e37a-d28a-4e48-cb96-668d4a6fb57d', 'Watch Repair', '82964 Madeline Squares, East Diannaside, MS 41249-9843', 7, false, '09:00:00', '17:00:00'),
('4e0ba898-74e4-8ab7-58fc-044364221044', 'The Fudge Place', '28659 Del Fork, Cronaton, DE 19395-0586', 20, true, '10:00:00', '20:00:00'),
('2094170e-5739-43bd-ed5c-783c949c9948', 'Chez Paris', 'Suite 721 491 Horacio Row, Edmundburgh, ID 27181', 71, true, '10:00:00', '21:00:00'),
('18a4b0b4-b7b5-da87-e5d8-c8f02e97eda5', 'Gerald Field', '02804 Leisa Spurs, Josefville, LA 19687-0193', 20, true, '00:00:00', '00:00:00'),
('1e3cb465-c0d8-1f31-4231-08c34e101fc3', 'Roscoe''s Funky Rags', 'Suite 082 459 Francis Pass, South Delberthaven, OR 46039', 21, true, '00:00:00', '00:00:00'),
('b79e6fc9-f07a-d5cd-e072-8104a5d5101d', 'The Fudge Place', 'Apt. 169 48961 Bernie Hill, Deandretown, SC 13932-0730', 63, false, '09:00:00', '17:00:00'),
('ca83fc1c-95e5-d012-35bf-151b7f720264', 'Sunset Arms', '7544 Darin Creek, New Thad, OH 45678-3629', 50, true, '21:00:00', '07:00:00'),
('ff01c573-ebf3-c704-3ad0-fd582f7a2a12', 'Hillwood City', '9017 Lawrence Course, Kelleyport, MD 13766', 9, true, '22:22:00', '11:11:00');

INSERT INTO SCR_CAR (ID,VERSION,MANUFACTURER,MODEL,REG_NUMBER,CAR_TYPE, GARAGE_ID)
VALUES
('3da61043-aaad-7e30-c7f5-c1f1328d3980', 1, 'VAZ',      '2121',     'ab345','SEDAN', 'd99d468e-3cc0-01da-295e-595e48fec620'),
('5f14d58d-6f24-4590-eef9-4b5885ed3e34', 1, 'ZAZ',      '968M',     'a010a','SEDAN', null),
('63e88502-3cf0-382c-8f5f-07a0c8a4d9b2', 1, 'GAZ',      '2410',     'aaabb','HATCHBACK', null),
('73c05bf0-ef67-4291-48a2-1481fc7f17e6', 1, 'Audi',     '2141',     'az123','HATCHBACK', null),
('bf6791e6-0e0a-8ca1-6a98-75b0a8971676', 1, 'BMW',      'X0',       'x00zz','SEDAN', null),
('c2a14bec-cd7d-a3e4-1581-db243cf704aa', 1, 'Porsche',  '911',      null,'SEDAN', null),
('f44d486f-2fa3-4789-d02a-c1d2b2c67fc6', 1, 'Tesla',    'Model Y',  'tt444','HATCHBACK', null),
('fc63ccfc-e8e9-5486-5c38-98ae42f729da', 1, 'Mercedes', null,       'mmbbb','SEDAN', null),
('b94eede4-c1da-43df-830d-36ef1414385b', 1, 'Mercedes', 'm01',      'tm001','HATCHBACK', null),
('c7052489-3697-48f6-a0f3-8e874d732865', 1, 'Mercedes', 'm02',      'tm002','HATCHBACK', null),
('7db61cfc-1e50-4898-a76d-42347ffb763f', 1, 'Mercedes', 'm03',      'tm003','SEDAN', null),
('bc5b3371-7418-4c79-90e8-81b09c59d9a1', 1, 'Mercedes', 'm04',      'tm004','SEDAN', null),
('2325c7af-9569-4f66-bcf7-bb52cba5388b', 1, 'Mercedes', 'm05',      'tm005','SEDAN', null),
('8561ba7a-49c5-4683-9251-59f376018a89', 1, 'Mercedes', 'm06',      'tm006','SEDAN', null),
('aa595879-484f-4e7d-b19a-429cb2d84f79', 1, 'Mercedes', 'm07',      'tm007','SEDAN', null),
('94505084-e12c-44c0-9e55-0ee9ef5f3a90', 1, 'Mercedes', 'm08',      'tm008','SEDAN', null),
('5db1dce7-ceee-42f8-a14b-ddb93c4ad999', 1, 'Mercedes', 'm09',      'tm009','SEDAN', null),
('50277e41-97d1-4af2-a122-1e87ae3011d9', 1, 'Mercedes', 'm10',      'tm010','SEDAN', null),
('a64e6ef7-49d6-4ce5-8973-8c95ac1576e0', 1, 'Mercedes', 'm11',      'tm011','SEDAN', null),
('c4ef4c14-5be9-406a-8457-db0bc760913a', 1, 'Mercedes', 'm12',      'tm012','SEDAN', null),
('6b853033-db8c-4d51-ab4c-4b3146796348', 1, 'Mercedes', 'm13',      'tm013','SEDAN', null),
('c5a0c22e-a8ce-4c5a-9068-8fb142af26ae', 1, 'Mercedes', 'm14',      'tm014','SEDAN', null);


INSERT INTO SCR_FORM_WIZARD_ASSOCIATION_O2 (ID,NAME)
VALUES
('d7c75db0-6830-4d18-9a95-10d385b51649', 'FormWizard AssociationO2O 1'),
('838b2192-5035-43f2-a127-17e480bb7b39', 'FormWizard AssociationO2O 2'),
('8f6d35ab-2ae2-43b7-a6e0-668a14658d44', 'FormWizard AssociationO2O 3');

INSERT INTO SCR_FORM_WIZARD_COMPOSITION_O2 (ID,NAME)
VALUES
('f403bcfb-ef17-4f4d-90de-b8aab295d678', 'FormWizard CompositionO2O 1'),
('8842fd77-5ba2-4b2a-9232-78153c1f9466', 'FormWizard CompositionO2O 2'),
('f44ab772-e10d-4856-94a6-d67bfe3b5db9', 'FormWizard CompositionO2O 3');

INSERT INTO SCR_FORM_WIZARD_TEST_ENTITY (ID, NOT_NULL, DATE_, TIME_, INTEGER_, COMPOSITION_O2O_ID, ASSOCIATION_O2O_ID)
VALUES
('3f140da5-29a2-46e8-9eb3-7f3a0e7e6d08', 'FormWizardTestEntity 1', null, null, null, 'f403bcfb-ef17-4f4d-90de-b8aab295d678', 'd7c75db0-6830-4d18-9a95-10d385b51649'),
('6e827739-301a-4815-b0ff-e78c2bc0b28e', 'FormWizardTestEntity 2', null, null, null, '8842fd77-5ba2-4b2a-9232-78153c1f9466', '838b2192-5035-43f2-a127-17e480bb7b39'),
('5d0efab7-bd7d-4264-939e-03b91cb09455', 'FormWizardTestEntity 3', null, null, null, 'f44ab772-e10d-4856-94a6-d67bfe3b5db9', '8f6d35ab-2ae2-43b7-a6e0-668a14658d44');
