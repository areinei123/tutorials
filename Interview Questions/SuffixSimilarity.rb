def suffixated(word)
    similarities = 0
    suffix = word
    (0...word.length).each do |i|
        (0...suffix.length).each do |t|
            if suffix.slice(0..t).rindex(word)
                similarities = similarities + suffix.length
            end
        end
        suffix = suffix[1..-1]
    end
    return similarities
end

n = gets.to_i
array = []
(0...n).each do |i|
    array.push(gets) 
end
array.each do |word|
    res = suffixated(word)
    puts res
end

for each word in array
  similarities = 0
  suffix = word
  while the length of suffix doe not equal 0
    for each string in suffix, starting at suffix.split(0) and ending at suffix.split(0..suffix.length)
      when the string does not match up with word
        add the length of string minus 1 to similarities
      end
    end
    then remove the first letter of suffix
  end
  return similarities
end
    
