const { client } = require('./DbConfig');

async function getNextSequenceValue(sequenceName) {
  const db = client.db();
  const countersCollection = db.collection('counters');

  const result = await countersCollection.findOneAndUpdate(
    { _id: sequenceName },
    { $inc: { sequence_value: 1 } },
    { returnDocument: 'after', upsert: true }
  );

  return result.value.sequence_value;
}

module.exports = getNextSequenceValue;
