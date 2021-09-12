module.exports = function(sequelize, DataTypes){
    const fileDefine = sequelize.define('file_define',
        {
            id: { type: DataTypes.UUID, defaultValue: DataTypes.UUIDV1, primaryKey: true },
            cfg_id : { type: DataTypes.STRING },
            file_name : { type: DataTypes.STRING },
            file_desc : { type: DataTypes.STRING },
            file_charset : { type: DataTypes.STRING },
            file_type : { type: DataTypes.STRING },
            data_type : { type: DataTypes.STRING },
            ftp_env_id : { type: DataTypes.STRING },
            schedule_min : { type: DataTypes.STRING },
            schedule_hour : { type: DataTypes.STRING },
            schedule_day : { type: DataTypes.STRING },
            schedule_week : { type: DataTypes.STRING },
            schedule_month : { type: DataTypes.STRING },
            cm_f01 : { type: DataTypes.STRING },
            cm_f02 : { type: DataTypes.STRING },
            create_user : { type: DataTypes.STRING },
            create_date : { type: DataTypes.STRING },
            update_user : { type: DataTypes.STRING },
            update_date : { type: DataTypes.STRING },
            delete_user : { type: DataTypes.STRING },
            delete_date : { type: DataTypes.STRING },
            nodatasend : { type: DataTypes.STRING },
            send_flag : { type: DataTypes.STRING }
        }
    );
    return fileDefine;
}