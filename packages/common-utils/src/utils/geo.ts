function rad(d: number) {
    return (d * Math.PI) / 180.0;
}

/** gcj02坐标距离 */
export const getDistance = (lon1: number, lat1: number, lon2: number, lat2: number) => {
    const radLat1 = rad(lat1);
    const radLat2 = rad(lat2);
    const a = radLat1 - radLat2;
    const b = rad(lon1) - rad(lon2);
    let s =
        2 * Math.asin(Math.sqrt(Math.sin(a / 2) ** 2 + Math.cos(radLat1) * Math.cos(radLat2) * Math.sin(b / 2) ** 2));
    s *= 6378137;
    // 单位米
    return s;
};

/** 距离格式化 */
export const formatDistance = (distance: number, precision = 2) => {
    if (distance < 1000) {
        return `${distance.toFixed(precision)}m`;
    }
    return `${(distance / 1000).toFixed(precision)}km`;
};
