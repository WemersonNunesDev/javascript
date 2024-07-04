function getDayWeekeText (dayWeeke) {
    let dayWeekeString;

    switch (dayWeeke) {
        case 0:
            dayWeekeString = 'Domingo';
            return dayWeekeString;
        case 1:
            dayWeekeString = 'Segunda';
            return dayWeekeString;;
        case 2:
            dayWeekeString = 'Terça';
            return dayWeekeString;;
        case 3:
            dayWeekeString = 'Quarta';
            return dayWeekeString;;
        case 4:
            dayWeekeString = 'Quinta';
            return dayWeekeString;;
        case 5:
            dayWeekeString = 'Sexta';
            return dayWeekeString;;
        case 6:
            dayWeekeString = 'Sábado';
            return dayWeekeString;;
        default:
            dayWeekeString = '';
            return dayWeekeString;;
    }
    
}

const data = new Date();
const dayWeeke = data.getDay();
const dayWeekText = getDayWeekeText (dayWeeke) ;

console.log(dayWeeke, dayWeekText);
