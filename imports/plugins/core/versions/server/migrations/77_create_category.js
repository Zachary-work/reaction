import { Migrations } from "meteor/percolate:migrations";
import rawCollections from "/imports/collections/rawCollections";
import Random from "@reactioncommerce/random";

Migrations.add({
    version: 77,
    async up() {
        const { Categories } = rawCollections;

        const cat = [
            { name: "美容", emoji: "💋‍" },
            { name: "個人護理", emoji: "🧴‍" },
            { name: "汽車用品", emoji: "🚘‍" },
            { name: "補充品", emoji: "⛑️‍" },
            { name: "配件", emoji: "👓‍" },
            { name: "體驗", emoji: "🤝‍" },
            { name: "旅遊", emoji: "✈️‍" },
            { name: "雜貨", emoji: "🥫‍" },
            { name: "運動", emoji: "🧘‍" }
        ];

        const data = cat.map((_cat) => {
            return {
                ..._cat,
                _id: Random.id()
            }
        });

        await Categories.insert(data);

    },
    async down() {
        const { Categories } = rawCollections;

        await Categories.remove();
    }
    // No `down` migration possible. Deleted users would need to be restored from backup.
});
