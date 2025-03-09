import dayjs from 'dayjs';

/** 是否是老身份证 */
export const isOldCard = (idCard: string) => {
    return idCard.length === 15;
};

/** 是否是新身份证 */
export const isNewCard = (idCard: string) => {
    return idCard.length === 18;
};

/** 根据身份证获取出生年月日 */
export const getBirthday = (idCard: string) => {
    if (isOldCard(idCard)) {
        // 提取出生年月日相关部分
        const yearPart = idCard.slice(6, 8);
        const month = idCard.slice(8, 10);
        const day = idCard.slice(10, 12);
        // 补全年份为 4 位
        const fullYear = `19${yearPart}`;
        // 确保月和日为 2 位
        const formattedMonth = month.padStart(2, '0');
        const formattedDay = day.padStart(2, '0');
        return `${fullYear}-${formattedMonth}-${formattedDay}`;
    }
    if (isNewCard(idCard)) {
        const year = idCard.slice(6, 10);
        const month = idCard.slice(10, 12);
        const day = idCard.slice(12, 14);
        return `${year}-${month}-${day}`;
    }
    return null;
};

/** 根据身份证获取年龄 */
export const getAge = (idCard: string) => {
    const birthday = getBirthday(idCard);
    if (!birthday) {
        return 0;
    }

    const birthDate = dayjs(birthday);
    const currentDate = dayjs();

    return currentDate.diff(birthDate, 'year');
};
