const Database = require('./db')
const createProffy = require('./createProffy')

Database.then(async (db) => {
    // Inserir dados

    proffyValue = {
        name: 'Ian Luca',
        avatar: 'https://media-exp1.licdn.com/dms/image/C4D03AQGlwF2tme3wTQ/profile-displayphoto-shrink_100_100/0?e=1602720000&v=beta&t=mrmqTw32pgFtyivcP4JqU4MP0OUw2EikWhd3zlxqFPw',
        whatsapp: '984023078',
        bio: 'Instrutor de Ingles',
    }

    classValue = {
        subject: 1,
        cost: '30',
        // o proffy id vira pelo banco de dados
    }

    classScheduleValues = [
        {
            weekday: 1,
            time_from: 720,
            time_to: 1220
        }, 
        {
            weekday: 3,
            time_from: 550,
            time_to: 2200
        }
    ]

    // await createProffy(db, {proffyValue, classValue, classScheduleValues}) 

    // Consultar os dados inseridos 

    // TODOS OS PROFFYS
    const selectedProffys = await db.all("SELECT * FROM proffys")
    // console.log(selectedProffys)

    const selectClassesAndProffys = await db.all(`
        SELECT classes.*, proffys.*
        FROM proffys
        JOIN classes ON (classes.proffy_id = proffys.id)
        WHERE classes.proffy_id = 1;
    `)
    //console.log(selectClassesAndProffys)

    const selectClassesSchedule = await db.all(`
        SELECT class_schedule.* 
        FROM class_schedule
        WHERE class_schedule.class_id = "1"
        AND class_schedule.weekday = "3"
        AND class_schedule.time_from <= "1300"
        AND class_schedule.time_to > "1300"
    `)
    //console.log(selectClassesSchedule)

}) 