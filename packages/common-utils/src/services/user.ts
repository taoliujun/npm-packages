/** 显示完整的用户昵称 */
export const renderUserNickname = (input: { id: number; nickname: string }, hideUserId?: boolean) => {
    if (!input) {
        return null;
    }

    let out = input.nickname;
    if (!hideUserId) {
        out = `${out}(${input.id})`;
    }

    return out;
};
