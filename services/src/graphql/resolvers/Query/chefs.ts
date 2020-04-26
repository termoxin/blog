
import {Chef} from "#root/db/models";

const chefsResolver = () => Chef.findAll();

export default chefsResolver;